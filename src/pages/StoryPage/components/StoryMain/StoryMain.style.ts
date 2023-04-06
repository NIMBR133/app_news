import styled from "styled-components";

const WrapperStory = styled.div``;

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
`;

const LinkWrapper = styled.div`
  margin-top: 30px;
`;

const LinkText = styled.span`
  font-size: 18px;
`;

const WrapperNewsListError = styled.div``;

const TitleError = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-top: 100px;
`;

export const Styles = {
  WrapperStory,
  Header,
  Title,
  LinkWrapper,
  LinkText,
  TitleError,
  WrapperNewsListError,
};
