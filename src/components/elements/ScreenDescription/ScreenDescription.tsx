import { Container, Slogan } from "./styled";
import { ScreenDescriptionProps } from "./types";

export const ScreenDescription = ({
  title,
  slogan,
}: ScreenDescriptionProps) => {
  return (
    <Container>
      <h1>{title}</h1>
      <Slogan>
        <label>{slogan}</label>
      </Slogan>
    </Container>
  );
};
