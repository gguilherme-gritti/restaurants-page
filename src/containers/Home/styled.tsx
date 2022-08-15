import styled from "styled-components";
import { theme } from "../../styles";

export const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: center;

  background-color: ${(props) => props.theme.palette.white};

  @media (max-width: 768px) {
    border-radius: ${(props) => props.theme.radius["xl"]};
    align-items: center;
    margin-top: -30px;
  }
`;

export const PageContent = styled.div`
  width: 60%;

  margin-top: ${(props) => props.theme.spacing["3"]};

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const ListArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
