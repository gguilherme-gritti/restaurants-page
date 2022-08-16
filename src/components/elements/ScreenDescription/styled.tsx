import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 95px;

  text-align: right;

  h1 {
    color: ${(props) => props.theme.palette.darkDown};
  }

  @media (${(props) => props.theme.media["tablet"]}) {
    padding-top: 0px;
    h1 {
      font-size: ${(props) => props.theme.fontSizes["xxl"]};
    }
    text-align: left;
  }
`;

export const Slogan = styled.div`
  max-width: 350px;

  float: right;

  label {
    color: ${(props) => props.theme.palette.dark};
    font-size: ${(props) => props.theme.fontSizes.xl};
  }

  @media (max-width: 950px) {
    font-size: ${(props) => props.theme.fontSizes.sm};
  }

  @media (${(props) => props.theme.media["tablet"]}) {
    padding-top: ${(props) => props.theme.spacing["2"]};
    max-width: 100%;
    font-size: ${(props) => props.theme.fontSizes.xs};
    float: none;
  }
`;
