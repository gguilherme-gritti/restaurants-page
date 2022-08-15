import styled from "styled-components";
import { theme } from "../../../styles";

export const Card = styled.div`
  height: 170px;
  width: 350px;

  background-color: tomato;

  display: flex;
  align-items: flex-end;

  padding: ${(props) => props.theme.spacing["2"]};

  border-radius: ${(props) => props.theme.radius.md};

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.srcBackground});
`;

export const TextBottom = styled.label`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.palette.white}; ;
`;
