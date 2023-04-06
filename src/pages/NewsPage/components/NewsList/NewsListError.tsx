import { FC } from "react";

import { Styles } from "./NewsList.style";

const { WrapperNewsListError, Title } = Styles;

export const NewsListError: FC = () => {
  return (
    <WrapperNewsListError>
      <Title>
        An error occurred while receiving the data. Reload the page.
      </Title>
    </WrapperNewsListError>
  );
};
