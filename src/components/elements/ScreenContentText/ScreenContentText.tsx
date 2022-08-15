import { Container, TextResultArea } from "./styled";

export const ScreenContentText = () => {
  return (
    <Container>
      <h2>Restaurantes</h2>
      <TextResultArea>
        <label>Resultados para</label>
        <h4>Termo Pesquisado</h4>
      </TextResultArea>
    </Container>
  );
};
