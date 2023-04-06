import { FC, useState } from "react";

import { getComments } from "@/api/loaders/loader-story";
import { BadgeComment } from "@/components/UI/BadgeComment";
import { Spinner } from "@/components/UI/Spinner";
import { Comment } from "@/interfaces";

import { CommentsMap } from "../CommentsMap";
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
  comments?: Comment[];
}

export const Comments: FC<Props> = ({ comments }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [commentsData, setCommentsData] = useState(comments);

  const onRefresh = async () => {
    setIsLoading(true);

    const newComments = await getComments(
      commentsData?.map((comment) => comment.id)
    );

    setCommentsData(newComments);

    setIsLoading(false);
  };

  return (
    <WrapperComments>
      <Header>
        <Title>Comments</Title>
        <BadgeComment count={commentsData && commentsData.length} />
      </Header>

      <WrapperCommentsList>
        {isLoading ? (
          <Spinner mt={60} mb={60} />
        ) : (
          <>
            {commentsData ? (
              <>
                <CommentsMap comments={commentsData} />
                <RefreshIconStyled onClick={onRefresh} />
              </>
            ) : (
              <NoComments>No comments...</NoComments>
            )}
          </>
        )}
      </WrapperCommentsList>
    </WrapperComments>
  );
};
