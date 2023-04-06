import axios, { AxiosResponse } from "axios";

import { CommentResponse, StoryResponse } from "@/interfaces";

export const API_URL = "https://hacker-news.firebaseio.com/v0";

const axiosConfig = {
  baseURL: API_URL,
};

const fetchApi = axios.create(axiosConfig);

type Response<T> = Promise<AxiosResponse<T>>;

export const api = {
  getNewsId: (): Response<string[]> =>
    fetchApi.get("/newstories.json?print=pretty"),

  getStory: (id: string): Response<StoryResponse> =>
    fetchApi.get(`/item/${id}.json`, {
      timeout: 5000,
    }),

  getComments: (id: string): Response<CommentResponse> =>
    fetchApi.get(`/item/${id}.json`, {
      timeout: 5000,
    }),
};
