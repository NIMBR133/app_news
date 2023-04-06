import { FC } from "react";

import { Styles } from "./StoryMain.style";

const { WrapperNewsListError, TitleError } = Styles;

export const StoryMainError: FC = () => {
  return (
    <WrapperNewsListError>
      <TitleError>
        An error occurred while receiving the data. Reload the page.
      </TitleError>
    </WrapperNewsListError>
  );
};
