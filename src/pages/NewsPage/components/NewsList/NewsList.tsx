import { FC } from "react";
import { useAsyncValue } from "react-router";

import { Story } from "@/interfaces";

import { StoryCard } from "../StoryCard";
import { Styles } from "./NewsList.style";

const { WrapperNews } = Styles;

export const NewsList: FC = () => {
  const news = useAsyncValue() as Story[];

  return (
    <WrapperNews>
      {news.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </WrapperNews>
  );
};
