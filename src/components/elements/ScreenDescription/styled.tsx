import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 95px;

  text-align: right;

  h1 {
    color: ${(props) => props.theme.palette.darkDown};
  }

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: ${(props) => props.theme.fontSizes.xs};
    float: none;
  }
`;
