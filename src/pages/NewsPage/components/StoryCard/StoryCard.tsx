import { Chip, Rating } from "@mui/material";
import { FC } from "react";

import { BadgeComment } from "@/components/UI/BadgeComment";
import { Time } from "@/components/UI/Time";
import { useCommentsCount } from "@/hooks/use-comments-count";
import { Story } from "@/interfaces";
import { routes } from "@/routes";

import { Styles } from "./StoryCard.style";

const { CardWrapper, Card, Title, Top, Bottom } = Styles;

interface Props {
  story: Story;
}

export const StoryCard: FC<Props> = ({ story }) => {
  const commentsCount = useCommentsCount(story.kids);

  return (
    <CardWrapper>
      <Card to={routes.story(story.id)}>
        <Top>
          <Title>{story.title}</Title>
          <Rating name="read-only" readOnly value={story.score} />
        </Top>

        <Bottom>
          <Chip label={story.by} />
          <Time time={story?.time} />
          <BadgeComment count={commentsCount} />
        </Bottom>
      </Card>
    </CardWrapper>
  );
};
