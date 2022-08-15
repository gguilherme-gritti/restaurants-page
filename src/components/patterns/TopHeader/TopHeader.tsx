import { Container, Header, InputArea, Logo, Search } from "./styled";
import { RestaurantCard, ScreenDescription, SearchInput } from "../../elements";
import Image from "next/image";

import DesktopBackground from "../../../assets/images/desktopBackground.png";
import MobileBackground from "../../../assets/images/mobileBackground.png";

import LogoApp from "../../../assets/images/MeuApp.png";
import { useSizeWindow } from "../../../utils/SizeWindow";
import { useContext } from "react";
import TextContext from "../../../contexts/TextContext";
import { TextResultArea } from "../../elements/ScreenContentText/styled";

export const TopHeader = () => {
  const { setState, state } = useContext(TextContext);

  const { width } = useSizeWindow();

  return (
    <Container
      srcBackground={
        (width as number) < 768 ? MobileBackground.src : DesktopBackground.src
      }
    >
      <Header>
        <Logo>
          <Image src={LogoApp} alt="MeuApp logotipo" />
        </Logo>
        {(width as number) < 768 && !state ? (
          <ScreenDescription
            title="Descubra novos sabores"
            slogan="Aqui eu converso com você sobre nossa proposta"
          />
        ) : (width as number) > 768 ? (
          <ScreenDescription
            title="Descubra novos sabores"
            slogan="Aqui eu converso com você sobre nossa proposta"
          />
        ) : (
          <></>
        )}
        {(width as number) < 768 && state ? (
          <TextResultArea>
            <label>Resultados para</label>
            <h4>{state}</h4>
          </TextResultArea>
        ) : (
          <></>
        )}
      </Header>
      {(width as number) > 768 && (
        <InputArea>
          <Search>
            <SearchInput />
          </Search>
        </InputArea>
      )}
    </Container>
  );
};
