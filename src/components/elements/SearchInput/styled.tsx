import styled from "styled-components";
import { theme } from "../../../styles";

export const Container = styled.div`
  background-color: ${(props) => props.theme.palette.white};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: ${(props) => props.theme.sizes["13"]};
  padding: 13px ${(props) => props.theme.spacing["4"]};

  border: 1px solid ${(props) => props.theme.palette.lightMedium};
  border-radius: ${(props) => props.theme.radius["md"]};

  @media (max-width: 768px) {
    margin-top: 15px;
    margin-bottom: 10px;
  }
`;

export const Icon = styled.div`
  width: 15%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 85%;
  height: 100%;

  border: none;
  outline: none;
`;
