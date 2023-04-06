import { Container } from "@mui/material";
import { FC } from "react";

import { routes } from "@/routes";

import { Styles } from "./Header.style";

const { HeaderWrapper, HeaderStyled, Link } = Styles;

export const Header: FC = () => {
  return (
    <HeaderWrapper>
      <Container maxWidth="lg">
        <HeaderStyled>
          <Link to={routes.main}>App news</Link>
        </HeaderStyled>
      </Container>
    </HeaderWrapper>
  );
};
