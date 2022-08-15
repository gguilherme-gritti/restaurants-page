import type { GetServerSideProps, NextPage } from "next";
import { List, RestaurantCard, TopHeader } from "../components";
import { getRestaurantsData } from "../repositories/restaurant";

import { env } from "../envrionments";

import { useQuery } from "react-query";
import { RestaurantData } from "../repositories/types";

const Home: NextPage = () => {
  const { data, isFetching } = useQuery("restaurants", async () => {
    const response = await getRestaurantsData();

    return response as RestaurantData[];
  });

  return (
    <>
      <TopHeader />
      {isFetching ? <label>Carregando... </label> : <List restaurants={data} />}
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   const result = await getRestaurantsData();

//   return result;
// };

export default Home;
