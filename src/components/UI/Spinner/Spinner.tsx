import { CircularProgress } from "@mui/material";
import { FC } from "react";

import { Styles } from "./Spinner.style";

const { WrapperSpinner } = Styles;

interface Props {
  mt?: number;
  mb?: number;
}

export const Spinner: FC<Props> = ({ mt, mb }) => {
  return (
    <WrapperSpinner marginTop={mt} marginBottom={mb}>
      <CircularProgress />
    </WrapperSpinner>
  );
};
