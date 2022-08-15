import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 95px;

  text-align: right;

  h1 {
    color: ${(props) => props.theme.palette.darkDown};
  }
`;

export const Slogan = styled.div`
  max-width: 350px;

  float: right;

  label {
    color: ${(props) => props.theme.palette.dark};
    font-size: ${(props) => props.theme.fontSizes.xl};
  }
`;
