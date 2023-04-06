import { AxiosError } from "axios";
import { defer, LoaderFunction } from "react-router";

import { api } from "@/api";
import { nonNullable } from "@/helpers/nonNullable";
import { Comment, StoryWithComments } from "@/interfaces";

export const getComments = async (commentsId?: number[]) => {
  if (!commentsId || commentsId.length === 0) return;

  const promisesStoryComments = await Promise.allSettled(
    commentsId.map(async (commentId) => {
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

export const getStory = async (
  storyId?: string
): Promise<StoryWithComments | null> => {
  if (!storyId) return null;

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
    comments: await getComments(story.kids),
  };
};

export const loaderStory: LoaderFunction = async ({ params: { id } }) => {
  return defer({ story: getStory(id) });
};
