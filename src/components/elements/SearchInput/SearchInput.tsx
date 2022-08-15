import { useState } from "react";
import Image from "next/image";

import { Container, Icon, Input } from "./styled";
import Search from "../../../assets/icons/search.png";

export const SearchInput = () => {
  const [value, setValue] = useState("");

  return (
    <Container>
      <Icon>
        <Image src={Search} alt="Icone de Busca" />
      </Icon>
      <Input
        placeholder="Encontre um restaurante"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Container>
  );
};
