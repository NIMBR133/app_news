import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: relative;
  box-shadow: 0px 12px 8px 0px rgba(34, 60, 80, 0.1);
  background-color: gray;
`;

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 16px;
`;

const Link = styled(NavLink)`
  color: black;
  font-size: 18px;
  text-decoration: none;
  font-weight: 600;
`;

export const Styles = {
  HeaderStyled,
  HeaderWrapper,
  Link,
};
