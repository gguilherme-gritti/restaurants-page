import styled from "styled-components";
import { theme } from "../../../styles";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  justify-content: center;

  margin-top: ${(props) => props.theme.spacing["3"]};
`;

export const Content = styled.div`
  width: 50%;
  height: 100%;

  padding: ${(props) => props.theme.spacing["2"]};
  margin: ${(props) => props.theme.spacing["3"]};

  h4 {
    margin-bottom: ${(props) => props.theme.spacing["2"]};
  }

  p {
    color: ${(props) => props.theme.palette.dark};
    font-size: ${(props) => props.theme.fontSizes["1"]};
    margin-bottom: ${(props) => props.theme.spacing["6"]};
  }
`;

export const Description = styled.h2`
  color: ${(props) => props.theme.palette.dark};
  font-weight: 400;

  margin-bottom: ${(props) => props.theme.spacing["6"]};
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;

  background-color: ${(props) => props.theme.palette.light};

  margin-bottom: ${(props) => props.theme.spacing["6"]};
`;
