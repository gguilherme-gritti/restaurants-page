import { useContext } from "react";
import TextContext from "../../../contexts/TextContext";
import { useSizeWindow } from "../../../utils/SizeWindow";
import { SearchInput } from "../SearchInput";
import { Container, TextResultArea } from "./styled";

export const ScreenContentText = () => {
  const { state } = useContext(TextContext);

  const { width } = useSizeWindow();

  return (
    <>
      {(width as number) < 768 ? <SearchInput /> : <></>}
      <Container>
        {state ? <h2>Resultados</h2> : <h2>Restaurantes</h2>}
        {state && (width as number) > 768 ? (
          <TextResultArea>
            <label>Resultados para</label>
            <h4>{state}</h4>
          </TextResultArea>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
};
