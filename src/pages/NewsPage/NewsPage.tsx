import { Container } from "@mui/material";
import { FC, useEffect } from "react";

import { getNews, PromiseNews } from "@/api/loaders/loader-news";
import { SuspenseAwait } from "@/components/UI/SuspenseAwait";
import { useStateLoader } from "@/hooks/use-state-loader";

import { NewsList, NewsListError } from "./components/NewsList";
import { Styles } from "./NewsPage.style";

const { Wrapper, Title, RefreshIconStyled } = Styles;

let timerGetNews: NodeJS.Timer;

export const NewsPage: FC = () => {
  const [newsPromise, setNewsPromise] = useStateLoader<PromiseNews>();

  const setTimer = () => {
    timerGetNews = setInterval(onRefresh, 60000);
  };

  const clearTimer = () => clearInterval(timerGetNews);

  const onRefresh = () => {
    setNewsPromise({ news: getNews() });
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
          resolve={newsPromise.news}
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
