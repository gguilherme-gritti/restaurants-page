import { useContext } from "react";
import TextContext from "../../../contexts/TextContext";
import { RestaurantCard } from "../../elements";
import { ListProps } from "./types";

export const List = ({ restaurants }: ListProps) => {
  const { setState, state } = useContext(TextContext);

  return (
    <>
      {state
        ? restaurants
            ?.filter((restaurant) => restaurant.name === state)
            .map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                id={restaurant.id}
                srcBackground={restaurant.image}
                title={restaurant.name}
              />
            ))
        : restaurants?.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id}
              srcBackground={restaurant.image}
              title={restaurant.name}
            />
          ))}
    </>
  );
};
