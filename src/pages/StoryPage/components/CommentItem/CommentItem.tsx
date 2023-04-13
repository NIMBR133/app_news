import { Chip, Divider } from "@mui/material";
import { FC, useState } from "react";

import { getComments } from "@/api/loaders/loader-story";
import { BadgeComment } from "@/components/UI/BadgeComment";
import { SuspenseAwait } from "@/components/UI/SuspenseAwait";
import { Time } from "@/components/UI/Time";
import { Comment } from "@/interfaces";

import { CommentsMap } from "../CommentsMap";
import { Styles } from "./CommentItem.style";

const {
  WrapperCommentItem,
  Content,
  Bottom,
  NestedComments,
  BadgeCommentWrapper,
} = Styles;

interface Props {
  comment: Comment;
}

export const CommentItem: FC<Props> = ({ comment }) => {
  const [nestedComments, setNestedComments] =
    useState<ReturnType<typeof getComments>>();

  const onToggleNestedComments = () => {
    nestedComments
      ? setNestedComments(undefined)
      : setNestedComments(getComments({ commentsId: comment.kids }));
  };

  return (
    <WrapperCommentItem>
      <Content dangerouslySetInnerHTML={{ __html: comment.text }} />
      <Bottom>
        <Chip label={comment.by} />

        <Time time={comment?.time} />

        {comment.kids ? (
          <BadgeCommentWrapper>
            <BadgeComment
              count={comment.kids.length}
              onClick={onToggleNestedComments}
            />
          </BadgeCommentWrapper>
        ) : null}
      </Bottom>

      {nestedComments && (
        <SuspenseAwait resolve={nestedComments} spinnerMt={30} spinnerMb={10}>
          {(comments) => (
            <NestedComments>
              <Divider />
              <CommentsMap comments={comments} />
            </NestedComments>
          )}
        </SuspenseAwait>
      )}
    </WrapperCommentItem>
  );
};
