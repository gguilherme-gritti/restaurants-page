import { List, TopHeader } from "../../components";
import { getRestaurantsData } from "../../repositories/restaurant";

import { useQuery } from "react-query";
import { RestaurantData } from "../../repositories/types";
import { ListArea, PageContent } from "./styled";

export const Home = () => {
  const { data, isFetching } = useQuery("restaurants", async () => {
    const response = await getRestaurantsData();

    return response as RestaurantData[];
  });

  return (
    <>
      <TopHeader />
      {isFetching ? (
        <label>Carregando... </label>
      ) : (
        <PageContent>
          <ListArea>
            <List restaurants={data} />
          </ListArea>
        </PageContent>
      )}
    </>
  );
};
