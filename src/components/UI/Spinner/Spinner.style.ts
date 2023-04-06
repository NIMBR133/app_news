import styled from "styled-components";

const WrapperSpinner = styled.div<{
  marginTop?: number;
  marginBottom?: number;
}>`
  width: 100%;
  text-align: center;
  margin-top: ${(props) => props.marginTop}px;
  margin-bottom: ${(props) => props.marginBottom}px;
`;

export const Styles = {
  WrapperSpinner,
};
