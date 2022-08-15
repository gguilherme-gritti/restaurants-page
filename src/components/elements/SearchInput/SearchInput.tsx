import { useContext, useState } from "react";
import Image from "next/image";

import { Container, Icon, Input } from "./styled";
import Search from "../../../assets/icons/search.png";
import TextContext from "../../../contexts/TextContext";
import { getRestaurantsData } from "../../../repositories/restaurant";
import { RestaurantData } from "../../../repositories/types";
import { useQuery } from "react-query";

export const SearchInput = () => {
  const { setState, state } = useContext(TextContext);

  // const { data, isLoading } = useQuery(
  //   "restaurants",
  //   async () => {
  //     const response = await getRestaurantsData();

  //     console.log(response.filter((restaurant) => restaurant.name === state));

  //     return response.filter(
  //       (restaurant) => restaurant.name === state
  //     ) as RestaurantData[];
  //   },
  //   {
  //     staleTime: 1000 * 60, //1 minute
  //   }
  // );

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
