import { Container } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useLoaderData } from "react-router";

import { getNews } from "@/api/loaders/loader-news";
import { SuspenseAwait } from "@/components/UI/SuspenseAwait";
import { Story } from "@/interfaces";

import { NewsList, NewsListError } from "./components/NewsList";
import { Styles } from "./NewsPage.style";

const { Wrapper, Title, RefreshIconStyled } = Styles;

let timerGetNews: NodeJS.Timer;

export const NewsPage: FC = () => {
  const { news: newsPromise } = useLoaderData() as { news: Promise<Story[]> };
  const [newsListPromise, setNewsListPromise] = useState(newsPromise);

  const setTimer = () => {
    timerGetNews = setInterval(onRefresh, 60000);
  };

  const clearTimer = () => clearInterval(timerGetNews);

  const onRefresh = () => {
    setNewsListPromise(getNews());
    clearTimer();
    setTimer();
  };

  useEffect(() => {
    setTimer();

    return () => {
      clearTimer();
    };
  }, []);

  return (
    <Container maxWidth="lg">
      <Wrapper>
        <Title>Last News</Title>

        <SuspenseAwait
          resolve={newsListPromise}
          errorElement={<NewsListError />}
          spinnerMt={280}
        >
          <RefreshIconStyled onClick={onRefresh} />
          <NewsList />
        </SuspenseAwait>
      </Wrapper>
    </Container>
  );
};
