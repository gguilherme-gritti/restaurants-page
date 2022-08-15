import {
  Button,
  ButtonArea,
  ButtonImg,
  Container,
  Content,
  Header,
  Main,
  RestaurantLogo,
  RestaurantAreaLogo,
  RestaurantInfo,
  Description,
} from "./styled";
import { RestaurantHeaderProps } from "./types";

import ArrowLeft from "../../../assets/icons/arrowLeft.png";
import Image from "next/image";
import { useRouter } from "next/router";
import TextContext from "../../../contexts/TextContext";
import { useContext } from "react";

export const RestaurantHeader = ({
  restaurantBg,
  restaurantLogo,
  title,
  phone,
  site,
}: RestaurantHeaderProps) => {
  const { push } = useRouter();

  const { setState } = useContext(TextContext);

  return (
    <Container restaurantBg={restaurantBg}>
      <Header>
        <ButtonArea
          onClick={async () => {
            setState("");
            await push("/");
          }}
        >
          <ButtonImg>
            <Image src={ArrowLeft} alt="Icone Botão voltar" />
          </ButtonImg>
          <Button>Voltar</Button>
        </ButtonArea>
      </Header>
      <Content>
        <Main>
          <RestaurantAreaLogo>
            <RestaurantLogo restaurantLogo={restaurantLogo} />
          </RestaurantAreaLogo>
          <RestaurantInfo>
            <Description>
              <h1>{title}</h1>
              <p>{phone}</p>
              <p>{site}</p>
            </Description>
          </RestaurantInfo>
        </Main>
      </Content>
    </Container>
  );
};
