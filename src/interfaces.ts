export interface StoryResponse {
  by: string;
  descendants: number;
  id: number;
  time: string | null;
  title: string;
  type: string;
  url: string;
  score: number;
  kids?: number[];
}

export interface Story extends Omit<StoryResponse, "time"> {
  time: Date | null;
}

export interface StoryWithComments extends Story {
  comments?: Comment[];
}

export interface CommentResponse {
  by: string;
  id: number;
  kids?: number[];
  parent: number;
  text: string;
  time: string | null;
  deleted?: string;
}

export interface Comment extends Omit<CommentResponse, "time"> {
  time: Date | null;
}
