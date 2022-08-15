import styled from "styled-components";
import { theme } from "../../../styles";

export const Container = styled.div`
  height: 300px;
  width: 100%;

  top: 0;
  left: 0;

  padding: 30px 200px;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.restaurantBg});

  background-size: cover;
  background-position: center;
`;

export const Header = styled.header`
  width: 100%;
`;

export const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100px;
`;

export const ButtonImg = styled.div`
  width: 35%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  width: 65%;
  height: 100%;

  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.palette.white};

  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: 700;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  width: 100%;
`;

export const Main = styled.div`
  width: 50%;
  height: 75%;

  display: flex;
`;

export const RestaurantAreaLogo = styled.div`
  width: 35%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RestaurantLogo = styled.div`
  max-width: 150px;
  max-height: 150px;

  min-width: 150px;
  min-height: 150px;

  background: url(${(props) => props.restaurantLogo});
  background-size: cover;
  background-position: center;

  border-radius: 100%;
`;

export const RestaurantInfo = styled.div`
  width: 65%;

  padding-left: ${(props) => props.theme.spacing["2"]};

  display: flex;
  align-items: center;
`;

export const Description = styled.div`
  h1 {
    color: ${(props) => props.theme.palette.white};
  }

  p {
    color: ${(props) => props.theme.palette.white};

    margin-top: ${(props) => props.theme.spacing["1"]};

    font-weight: 400;
    font-size: ${(props) => props.theme.fontSizes.md};
  }
`;
