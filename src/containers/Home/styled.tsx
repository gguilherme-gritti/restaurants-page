import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: center;

  background-color: ${(props) => props.theme.palette.white};

  @media (${(props) => props.theme.media["tablet"]}) {
    border-radius: ${(props) => props.theme.radius["xl"]};
    align-items: center;
    margin-top: -${(props) => props.theme.spacing["6"]};
  }
`;

export const PageContent = styled.div`
  width: 60%;

  margin-top: ${(props) => props.theme.spacing["3"]};

  @media (${(props) => props.theme.media["tablet"]}) {
    width: 90%;
  }
`;

export const ListArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
