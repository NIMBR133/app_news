import { Comment } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { FC } from "react";

interface Props {
  count?: number;
  onClick?: () => void;
}

export const BadgeComment: FC<Props> = ({ count, onClick }) => {
  return (
    <Badge color="secondary" badgeContent={count} onClick={onClick}>
      <Comment />
    </Badge>
  );
};
