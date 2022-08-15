import styled from "styled-components";
import { theme } from "../../../styles";

export const Card = styled.div`
  height: 170px;

  display: flex;
  flex: 1 1 350px;
  align-items: flex-end;

  padding: ${(props) => props.theme.spacing["2"]};
  margin: ${(props) => props.theme.spacing["3"]};

  border-radius: ${(props) => props.theme.radius.md};

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.srcBackground});
  transition: 0.4s;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    box-shadow: 2px 2px 2px ${(props) => props.theme.palette.primary};
  }
`;

export const TextBottom = styled.label`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.palette.white}; ;
`;
