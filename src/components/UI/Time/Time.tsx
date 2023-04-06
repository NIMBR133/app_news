import { Chip } from "@mui/material";
import { FC } from "react";

import { Styles } from "./Time.style";

const { TimeWrapper } = Styles;

interface Props {
  time: Date | null;
}

export const Time: FC<Props> = ({ time }) => {
  if (!time) return null;

  return (
    <Chip
      label={
        <TimeWrapper dateTime={time.toISOString()}>
          {time.toLocaleString()}
        </TimeWrapper>
      }
    />
  );
};
