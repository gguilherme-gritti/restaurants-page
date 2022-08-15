import { useContext } from "react";
import TextContext from "../../../contexts/TextContext";
import { Container, TextResultArea } from "./styled";

export const ScreenContentText = () => {
  const { setState, state } = useContext(TextContext);

  return (
    <Container>
      {state ? <h2>Resultados</h2> : <h2>Restaurantes</h2>}
      {state ? (
        <TextResultArea>
          <label>Resultados para</label>
          <h4>{state}</h4>
        </TextResultArea>
      ) : (
        <></>
      )}
    </Container>
  );
};
