import styled from "styled-components";
import { theme } from "../../../styles";

export const Container = styled.div`
  height: 400px;
  width: 100%;
  /* position: fixed; */
  top: 0;
  left: 0;

  padding: 30px 200px;

  background: url(${(props) => props.srcBackground}) no-repeat;
  background-size: cover;
  background-position: center;
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
`;

export const InputArea = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const Search = styled.div`
  margin-top: ${(props) => props.theme.sizes["32"]};

  width: 50%;
`;
