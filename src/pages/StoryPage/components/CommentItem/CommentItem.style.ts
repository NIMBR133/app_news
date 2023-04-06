import styled from "styled-components";

const WrapperCommentItem = styled.article`
  padding: 16px 0;
`;

const Content = styled.div``;

const Bottom = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`;

const NestedComments = styled.div`
  padding-left: 40px;
  margin-top: 16px;
  margin-bottom: -16px;
`;

const BadgeCommentWrapper = styled.div`
  cursor: pointer;
`;

export const Styles = {
  WrapperCommentItem,
  Content,
  Bottom,
  NestedComments,
  BadgeCommentWrapper,
};
