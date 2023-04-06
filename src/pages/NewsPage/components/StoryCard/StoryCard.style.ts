import { NavLink } from "react-router-dom";
import styled from "styled-components";

const CardWrapper = styled.li`
  padding: 8px 20px;
  box-shadow: 0px 0px 16px 6px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  cursor: pointer;
  background-color: lightgray;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0px 0px 16px 6px rgba(0, 0, 0, 0.2);
  }
`;

const Card = styled(NavLink)`
  color: black;
`;

const Title = styled.h2`
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const Top = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Bottom = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

export const Styles = {
  CardWrapper,
  Card,
  Title,
  Top,
  Bottom,
};
