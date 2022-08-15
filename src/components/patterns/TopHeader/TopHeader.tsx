import { Container, Header, InputArea, Logo, Search } from "./styled";
import { ScreenDescription, SearchInput } from "../../elements";
import Image from "next/image";

import DesktopBackground from "../../../assets/images/desktopBackground.png";
import LogoApp from "../../../assets/images/MeuApp.png";

export const TopHeader = () => {
  return (
    <Container srcBackground={DesktopBackground.src}>
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
        <Search>
          <SearchInput />
        </Search>
      </InputArea>
    </Container>
  );
};
