import { Container } from "@mui/material";
import { FC } from "react";

import { PromiseStory } from "@/api/loaders/loader-story";
import { SuspenseAwait } from "@/components/UI/SuspenseAwait";
import { useStateLoader } from "@/hooks/use-state-loader";
import { Comment } from "@/interfaces";

import { Comments } from "./components/Comments";
import { StoryMain, StoryMainError } from "./components/StoryMain";
import { Styles } from "./StoryPage.style";

const { Wrapper } = Styles;

export const StoryPage: FC = () => {
  const [storyPromise, setStoryPromise] = useStateLoader<PromiseStory>();

  const onRefreshComments = (promiseValue: Promise<Comment[] | null>) => {
    setStoryPromise((prev) => ({ ...prev, comments: promiseValue }));
  };

  return (
    <Container maxWidth="lg">
      <Wrapper>
        <SuspenseAwait
          resolve={storyPromise.story}
          errorElement={<StoryMainError />}
          spinnerMt={70}
          spinnerMb={70}
        >
          <StoryMain />
        </SuspenseAwait>

        <Comments
          commentsPromise={storyPromise.comments}
          onRefreshComments={onRefreshComments}
        />
      </Wrapper>
    </Container>
  );
};
