import { AxiosError } from "axios";
import { defer, LoaderFunction } from "react-router";

import { api } from "@/api";
import { nonNullable } from "@/helpers/nonNullable";
import { sleep } from "@/helpers/sleep";
import { Comment, Story } from "@/interfaces";

interface CommentProps {
  story?: Promise<Story | null>;
  commentsId?: number[];
}

export const getComments = async ({ commentsId, story }: CommentProps) => {
  let ids: number[] | undefined = commentsId;
  if (story) {
    ids = (await story)?.kids;
  }

  await sleep(500);

  if (!ids || ids.length === 0) return null;

  const promisesStoryComments = await Promise.allSettled(
    ids.map(async (commentId) => {
      return (await api.getComments(String(commentId))).data;
    })
  );

  const storyComments: Comment[] = promisesStoryComments
    .map((result) => {
      if (
        result.status === "fulfilled" &&
        result.value &&
        !result.value.deleted
      ) {
        return {
          ...result.value,
          time: result.value?.time
            ? new Date(Number(result.value.time) * 1000)
            : null,
        };
      }
    })
    .filter(nonNullable);

  return storyComments;
};

export const getAllComments = async (commentsId?: number[]) => {
  let commentsCount = 0;

  const getNestedComments = async (ids: number[]) => {
    const comments = await getComments({ commentsId: ids });

    if (!comments) return commentsCount;

    commentsCount += comments.length;

    const promises = comments.map(async (comment) => {
      if (comment.kids) {
        await getNestedComments(comment.kids);
      }
    });

    await Promise.all(promises);
  };

  if (commentsId) await getNestedComments(commentsId);

  return commentsCount;
};

export const getStory = async (storyId?: string): Promise<Story | null> => {
  if (!storyId) return null;

  await sleep(2000);

  const story = (
    await api.getStory(storyId).catch((e: AxiosError) => {
      throw new Response("Error", {
        status: e.response?.status,
      });
    })
  ).data;

  return {
    ...story,
    time: story?.time ? new Date(Number(story.time) * 1000) : null,
  };
};

export const loaderStory: LoaderFunction = async ({ params: { id } }) => {
  const story = getStory(id);

  return defer({ story, comments: getComments({ story }) });
};

export interface PromiseStory {
  story: ReturnType<typeof getStory>;
  comments: ReturnType<typeof getComments>;
}
