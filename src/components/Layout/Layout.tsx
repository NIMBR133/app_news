import { FC } from "react";
import { Outlet } from "react-router";

import { Header } from "../Header";
import { Styles } from "./Layout.style";

const { Main } = Styles;

interface Props {
  children?: React.ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children ? children : <Outlet />}</Main>
    </>
  );
};
