import RefreshIcon from "@mui/icons-material/Refresh";
import styled from "styled-components";

const WrapperComments = styled.section`
  margin-top: 60px;
`;

const Header = styled.header`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 24px;
`;

const WrapperCommentsList = styled.div`
  margin-top: 20px;
  border-radius: 8px;
  padding: 20px;
  background: Gainsboro;
  position: relative;
`;

const RefreshIconStyled = styled(RefreshIcon)`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;

const NoComments = styled.div`
  padding: 20px 0;
  text-align: center;
  font-size: 22px;
`;

export const Styles = {
  WrapperComments,
  Header,
  Title,
  WrapperCommentsList,
  RefreshIconStyled,
  NoComments,
};
