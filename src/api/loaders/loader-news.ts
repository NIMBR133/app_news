import { AxiosError } from "axios";
import { defer, LoaderFunction } from "react-router";

import { api } from "@/api";
import { nonNullable } from "@/helpers/nonNullable";
import { Story } from "@/interfaces";

export const getNews = async (): Promise<Story[]> => {
  const responseNewsId = await api.getNewsId().catch((e: AxiosError) => {
    throw new Response("Error", {
      status: e.response?.status,
    });
  });

  const promisesNewsResult = await Promise.allSettled(
    responseNewsId.data.slice(0, 100).map(async (storyId) => {
      return (await api.getStory(storyId)).data;
    })
  );

  const stories: Story[] = promisesNewsResult
    .map((result) => {
      if (result.status === "fulfilled" && result.value) {
        return {
          ...result.value,
          time: result.value?.time
            ? new Date(Number(result.value.time) * 1000)
            : null,
        };
      }
    })
    .sort((a, b) => Number(b?.time?.getTime()) - Number(a?.time?.getTime()))
    .filter(nonNullable);

  return stories;
};

export const loaderNews: LoaderFunction = async () => {
  return defer({ news: getNews() });
};

export interface PromiseNews {
  news: ReturnType<typeof getNews>;
}
