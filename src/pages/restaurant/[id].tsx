import type { NextPage } from "next";
import { RestaurantDetail } from "../../components/templates";
import { env } from "../../envrionments";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getRestaurantData } from "../../repositories/restaurant";

import { useQuery } from "react-query";

const Restaurant: NextPage = () => {
  const { query, push } = useRouter();

  const { data, isFetching } = useQuery("restaurant", async () => {
    const response = await fetch(`${env.RESTAURANT_ENDPOINT}/${query.id}`);
    const data = await response.json();

    return data.data;
  });

  return (
    <>
      {isFetching ? (
        <p>Carregando...</p>
      ) : (
        <RestaurantDetail restaurant={data} />
      )}
    </>
  );
};

export default Restaurant;
