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

export const RestaurantHeader = ({
  restaurantBg,
  restaurantLogo,
  title,
  phone,
  site,
}: RestaurantHeaderProps) => {
  const { push } = useRouter();

  return (
    <Container restaurantBg={restaurantBg}>
      <Header>
        <ButtonArea>
          <ButtonImg>
            <Image src={ArrowLeft} alt="Icone Botão voltar" />
          </ButtonImg>
          <Button onClick={async () => await push("/")}>Voltar</Button>
        </ButtonArea>
      </Header>
      <Content>
        <Main>
          <RestaurantAreaLogo>
            <RestaurantLogo
              restaurantLogo={restaurantLogo}
              alt="Logotipo"
              layout="fill"
            />
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
