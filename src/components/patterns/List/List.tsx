import { RestaurantCard } from "../../elements";
import { ListProps } from "./types";

export const List = ({ restaurants }: ListProps) => {
  return (
    <>
      {restaurants?.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          srcBackground={restaurant.image}
          title={restaurant.name}
        />
      ))}
    </>
  );
};
