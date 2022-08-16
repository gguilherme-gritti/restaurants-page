import styled from "styled-components";

export const Container = styled.div<{ restaurantBg: string }>`
  height: 300px;
  width: 100%;

  padding: 30px 200px;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.restaurantBg});

  background-size: cover;
  background-position: center;

  @media (${(props) => props.theme.media["tablet"]}) {
    margin: 0px;
    height: 200px;
    padding-left: 0;
    padding-right: 0;
  }
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

  @media (${(props) => props.theme.media["tablet"]}) {
    margin-top: 50px;
  }
`;

export const Button = styled.button`
  width: 65%;
  height: 100%;

  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.palette.white};

  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: 700;

  @media (${(props) => props.theme.media["tablet"]}) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  width: 100%;
`;

export const Main = styled.div`
  width: 60%;
  height: 75%;

  display: flex;
`;

export const RestaurantAreaLogo = styled.div`
  width: 35%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (${(props) => props.theme.media["tablet"]}) {
    width: 100%;
  }
`;

export const RestaurantLogo = styled.div<{ restaurantLogo: string }>`
  max-width: 150px;
  max-height: 150px;

  min-width: 150px;
  min-height: 150px;

  background: url(${(props) => props.restaurantLogo});
  background-size: cover;
  background-position: center;

  border-radius: 100%;

  @media (${(props) => props.theme.media["tablet"]}) {
    border: 2px solid #fff;
  }
`;

export const RestaurantInfo = styled.div`
  width: 65%;

  padding-left: ${(props) => props.theme.spacing["2"]};

  display: flex;
  align-items: center;

  @media (${(props) => props.theme.media["tablet"]}) {
    display: none;
  }
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
