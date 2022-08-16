import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  justify-content: center;

  background-color: ${(props) => props.theme.palette.white};

  margin-top: ${(props) => props.theme.spacing["3"]};

  @media (${(props) => props.theme.media["tablet"]}) {
    margin-top: -30px;
    border-radius: 32px;
  }
`;

export const Content = styled.div`
  width: 50%;
  height: 100%;

  padding: ${(props) => props.theme.spacing["2"]};
  margin: ${(props) => props.theme.spacing["3"]};

  h4 {
    margin-bottom: ${(props) => props.theme.spacing["2"]};
  }

  p {
    color: ${(props) => props.theme.palette.dark};
    font-size: ${(props) => props.theme.fontSizes["1"]};
    margin-bottom: ${(props) => props.theme.spacing["6"]};
  }

  @media (${(props) => props.theme.media["tablet"]}) {
    width: 85%;
    margin-top: ${(props) => props.theme.spacing["6"]};
  }
`;

export const Description = styled.h2`
  color: ${(props) => props.theme.palette.dark};
  font-weight: 400;

  margin-bottom: ${(props) => props.theme.spacing["6"]};

  @media (${(props) => props.theme.media["tablet"]}) {
    font-size: ${(props) => props.theme.fontSizes["lg"]};
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;

  background-color: ${(props) => props.theme.palette.light};

  margin-bottom: ${(props) => props.theme.spacing["6"]};
`;

export const WrapperTitle = styled.div`
  display: none;

  @media (${(props) => props.theme.media["tablet"]}) {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: ${(props) => props.theme.spacing["10"]};
    margin-bottom: ${(props) => props.theme.spacing["5"]};
  }
`;

export const WrapperContact = styled.div`
  display: none;

  @media (${(props) => props.theme.media["tablet"]}) {
    display: block;

    p {
      margin-bottom: ${(props) => props.theme.spacing["1"]};
    }

    margin-bottom: ${(props) => props.theme.spacing["5"]};
  }
`;
