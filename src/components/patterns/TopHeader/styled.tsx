import styled from "styled-components";

export const Container = styled.div<{ srcBackground: string }>`
  height: 350px;
  width: 100%;
  top: 0;
  left: 0;

  padding: ${(props) => props.theme.spacing["6"]} 200px;

  background: url(${(props) => props.srcBackground}) no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 950px) {
    padding: ${(props) => props.theme.spacing["6"]} 150px;
  }

  @media (${(props) => props.theme.media["tablet"]}) {
    padding: ${(props) => props.theme.spacing["6"]}
      ${(props) => props.theme.spacing["6"]};
    height: 250px;
  }
`;

export const Header = styled.header`
  display: flex;
  width: 100%;

  justify-content: space-between;
`;

export const Logo = styled.div`
  max-width: 100px;
  max-height: ${(props) => props.theme.spacing["6"]};

  display: flex;
  align-items: center;

  img {
    margin-top: ${(props) => props.theme.spacing["1"]};
  }

  @media (${(props) => props.theme.media["tablet"]}) {
    display: none;
  }
`;

export const InputArea = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  @media (${(props) => props.theme.media["tablet"]}) {
    display: none;
  }
`;

export const Search = styled.div`
  margin-top: ${(props) => props.theme.sizes["20"]};

  width: 50%;

  @media (max-width: 950px) {
    width: 65%;
  }

  @media (${(props) => props.theme.media["tablet"]}) {
    width: 85%;
  }
`;
