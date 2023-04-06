import styled from "styled-components";

const WrapperStory = styled.div``;

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 10px;
  }
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
