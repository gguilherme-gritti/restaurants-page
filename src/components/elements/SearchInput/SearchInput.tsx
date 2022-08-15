import { useContext, useState } from "react";
import Image from "next/image";

import { Container, Icon, Input } from "./styled";
import Search from "../../../assets/icons/search.png";
import TextContext from "../../../contexts/TextContext";

export const SearchInput = () => {
  const { setState, state } = useContext(TextContext);

  return (
    <Container>
      <Icon>
        <Image src={Search} alt="Icone de Busca" />
      </Icon>
      <Input
        placeholder="Encontre um restaurante"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </Container>
  );
};
