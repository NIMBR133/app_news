import { Container } from "@mui/material";
import { FC } from "react";
import { useLoaderData } from "react-router";

import { SuspenseAwait } from "@/components/UI/SuspenseAwait";
import { StoryWithComments } from "@/interfaces";

import { StoryMain, StoryMainError } from "./components/StoryMain";
import { Styles } from "./StoryPage.style";

const { Wrapper } = Styles;

export const StoryPage: FC = () => {
  const { story: storyPromise } = useLoaderData() as {
    story: Promise<StoryWithComments[]>;
  };

  return (
    <Container maxWidth="lg">
      <Wrapper>
        <SuspenseAwait
          resolve={storyPromise}
          errorElement={<StoryMainError />}
          spinnerMt={280}
        >
          <StoryMain />
        </SuspenseAwait>
      </Wrapper>
    </Container>
  );
};
