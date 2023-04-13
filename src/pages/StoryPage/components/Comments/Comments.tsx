import { FC } from "react";

import { getComments } from "@/api/loaders/loader-story";
import { BadgeComment } from "@/components/UI/BadgeComment";
import { SuspenseAwait } from "@/components/UI/SuspenseAwait";
import { Comment } from "@/interfaces";

import { CommentsMap } from "../CommentsMap";
import { StoryMainError } from "../StoryMain";
import { Styles } from "./Comments.style";

const {
  WrapperComments,
  Header,
  Title,
  WrapperCommentsList,
  RefreshIconStyled,
  NoComments,
} = Styles;

interface Props {
  commentsPromise: Promise<Comment[] | null>;
  onRefreshComments: (promiseValue: Promise<Comment[] | null>) => void;
}

export const Comments: FC<Props> = ({ commentsPromise, onRefreshComments }) => {
  const onRefresh = async (comments: Comment[]) => {
    onRefreshComments(
      getComments({ commentsId: comments?.map((comment) => comment.id) })
    );
  };

  return (
    <WrapperComments>
      <Header>
        <Title>Comments</Title>
        <SuspenseAwait resolve={commentsPromise} isFallback={false}>
          {(comments: Comment[] | null) => (
            <BadgeComment count={comments && comments.length} />
          )}
        </SuspenseAwait>
      </Header>

      <WrapperCommentsList>
        <SuspenseAwait
          resolve={commentsPromise}
          errorElement={<StoryMainError />}
          spinnerMt={30}
          spinnerMb={30}
        >
          {(comments: Comment[] | null) =>
            comments ? (
              <>
                <CommentsMap comments={comments} />
                <RefreshIconStyled onClick={() => onRefresh(comments)} />
              </>
            ) : (
              <NoComments>No comments...</NoComments>
            )
          }
        </SuspenseAwait>
      </WrapperCommentsList>
    </WrapperComments>
  );
};
