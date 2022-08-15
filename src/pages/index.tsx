import type { GetServerSideProps, NextPage } from "next";
import { List, RestaurantCard, TopHeader } from "../components";
import { getRestaurantsData } from "../repositories/restaurant";

const Home: NextPage = () => {
  return (
    <>
      <TopHeader />
      <List />
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   const result = await getRestaurantsData();

//   return result;
// };

export default Home;
