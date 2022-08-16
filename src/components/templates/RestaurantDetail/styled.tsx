import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: center;
`;

export const PageContent = styled.div`
  width: 60%;

  margin-top: ${(props) => props.theme.spacing["3"]};
`;

export const ListArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
