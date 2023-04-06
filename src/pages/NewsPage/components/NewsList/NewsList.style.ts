import styled from "styled-components";

const WrapperNews = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`;

const WrapperNewsListError = styled.div``;

const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-top: 100px;
`;

export const Styles = {
  WrapperNews,
  WrapperNewsListError,
  Title,
};
