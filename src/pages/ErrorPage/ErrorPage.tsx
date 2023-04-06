import { FC } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import { Layout } from "@/components/Layout";

import { Styles } from "./ErrorPage.style";

const { Wrapper, Title, Descr } = Styles;

export const ErrorPage: FC = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <Layout>
        <Wrapper id="error-page">
          <Title>Oops! Error {error.status}</Title>
          <Descr>{error.data}</Descr>
        </Wrapper>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <Wrapper id="error-page">
          <Title>Oops! Unexpected Error</Title>
          <Descr>Something went wrong.</Descr>
        </Wrapper>
      </Layout>
    );
  }
};
