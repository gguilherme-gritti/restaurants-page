import type { NextPage } from "next";
import { RestaurantDetail } from "../../components/templates";
import { env } from "../../envrionments";

import { useRouter } from "next/router";

import { useQuery } from "react-query";

const Restaurant: NextPage = () => {
  const { query } = useRouter();

  const { data, isLoading } = useQuery(["restaurant", query.id], async () => {
    const response = await fetch(`${env.RESTAURANT_ENDPOINT}/${query.id}`);
    const data = await response.json();

    return data.data;
  });

  return (
    <>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <RestaurantDetail restaurant={data} />
      )}
    </>
  );
};

export default Restaurant;
