import { Divider } from "@mui/material";
import { FC, Fragment } from "react";

import { Comment } from "@/interfaces";

import { CommentItem } from "../CommentItem";

interface Props {
  comments?: Comment[];
}

export const CommentsMap: FC<Props> = ({ comments }) => {
  return (
    <>
      {comments
        ? comments.map((comment, index) => (
            <Fragment key={comment.id}>
              <CommentItem comment={comment} />
              {index !== comments.length - 1 && <Divider />}
            </Fragment>
          ))
        : null}
    </>
  );
};
