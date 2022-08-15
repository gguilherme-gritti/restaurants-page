import {
  List,
  ScreenContentText,
  SearchInput,
  TopHeader,
} from "../../components";
import { getRestaurantsData } from "../../repositories/restaurant";

import { useQuery } from "react-query";
import { RestaurantData } from "../../repositories/types";
import { ListArea, Container, PageContent } from "./styled";
import { useSizeWindow } from "../../utils/SizeWindow";

export const Home = () => {
  const { data, isLoading } = useQuery(
    "restaurants",
    async () => {
      const response = await getRestaurantsData();

      return response as RestaurantData[];
    },
    {
      staleTime: 1000 * 60, //1 minute
    }
  );

  const { width } = useSizeWindow();

  return (
    <>
      <TopHeader />
      {isLoading ? (
        <label>Carregando... </label>
      ) : (
        <>
          <Container>
            <PageContent>
              <ScreenContentText />
              <ListArea>
                <List restaurants={data} />
              </ListArea>
            </PageContent>
          </Container>
        </>
      )}
    </>
  );
};
