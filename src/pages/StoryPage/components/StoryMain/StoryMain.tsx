import { Button, Chip, Link } from "@mui/material";
import { FC } from "react";
import { useAsyncValue, useNavigate } from "react-router";

import { Time } from "@/components/UI/Time";
import { Story } from "@/interfaces";

import { Styles } from "./StoryMain.style";

const { Header, Title, LinkWrapper, LinkText } = Styles;

export const StoryMain: FC = () => {
  const navigate = useNavigate();
  const story = useAsyncValue() as Story;

  const onBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Header>
        <Title>{story.title}</Title>
        <Chip label={story.by} />
        <Time time={story?.time} />
      </Header>

      <Button variant="contained" onClick={onBack}>
        To back
      </Button>

      <LinkWrapper>
        <LinkText>Go to news: </LinkText>
        <Link href={story.url} variant="h6" color="#000" target={"_blank"}>
          {story.url}
        </Link>
      </LinkWrapper>
    </>
  );
};
