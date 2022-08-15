import styled from "styled-components";
import { theme } from "../../../styles";

export const Container = styled.div`
  height: 350px;
  width: 100%;
  top: 0;
  left: 0;

  padding: 30px 200px;

  background: url(${(props) => props.srcBackground}) no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 950px) {
    padding: 30px 150px;
  }

  @media (max-width: 768px) {
    padding: 30px 30px;
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
  max-height: 45px;

  display: flex;
  align-items: center;

  img {
    margin-top: ${(props) => props.theme.spacing["1"]};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const InputArea = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Search = styled.div`
  margin-top: ${(props) => props.theme.sizes["20"]};

  width: 50%;

  @media (max-width: 950px) {
    width: 65%;
  }

  @media (max-width: 768px) {
    width: 85%;
  }
`;
