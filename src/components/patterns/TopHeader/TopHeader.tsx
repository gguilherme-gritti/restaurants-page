import { Container, Header, InputArea, Logo, Search } from "./styled";
import { RestaurantCard, ScreenDescription, SearchInput } from "../../elements";
import Image from "next/image";

import DesktopBackground from "../../../assets/images/desktopBackground.png";
import MobileBackground from "../../../assets/images/mobileBackground.png";

import LogoApp from "../../../assets/images/MeuApp.png";
import { useSizeWindow } from "../../../utils/SizeWindow";

export const TopHeader = () => {
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
        <ScreenDescription
          title="Descubra novos sabores"
          slogan="Aqui eu converso com você sobre nossa proposta"
        />
      </Header>
      <InputArea>
        <Search>{(width as number) > 768 ? <SearchInput /> : <></>}</Search>
      </InputArea>
    </Container>
  );
};
