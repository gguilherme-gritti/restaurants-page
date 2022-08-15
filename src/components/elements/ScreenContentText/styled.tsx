import styled from "styled-components";
import { theme } from "../../../styles";

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  h2 {
    margin: ${(props) => props.theme.spacing["3"]};
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 18px;
      margin-bottom: 0px;
    }
  }
`;

export const TextResultArea = styled.div`
  width: 180px;

  margin-right: ${(props) => props.theme.spacing["3"]};

  text-align: right;

  label {
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: 400;
    color: ${(props) => props.theme.palette.lightDown};
  }

  h4 {
    margin-top: ${(props) => props.theme.spacing["1"]};
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin-right: 0px;
    margin-top: 25px;
  }
`;
