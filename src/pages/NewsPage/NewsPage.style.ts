import RefreshIcon from "@mui/icons-material/Refresh";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 40px 16px 40px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const RefreshIconStyled = styled(RefreshIcon)`
  display: block !important;
  margin-left: auto;
  margin-bottom: 8px;
  cursor: pointer;
`;

export const Styles = {
  Wrapper,
  Title,
  RefreshIconStyled,
};
