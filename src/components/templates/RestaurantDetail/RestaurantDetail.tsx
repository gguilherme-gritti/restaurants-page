import { MaskPhone } from "../../../utils/MaskPhone";
import { RestaurantDescription, RestaurantHeader } from "../../patterns";
import { RestaurantDetailProps } from "./types";

export const RestaurantDetail = ({ restaurant }: RestaurantDetailProps) => {
  return (
    <>
      <RestaurantHeader
        restaurantBg={restaurant?.image}
        restaurantLogo={restaurant.logo}
        title={restaurant?.name}
        phone={restaurant?.telephone}
        site={restaurant?.website}
      />
      <RestaurantDescription
        description={restaurant?.description}
        priceRange={restaurant?.price_range}
        openingHours={restaurant?.opening_hours}
        paymentMethods={restaurant?.payment_methods}
        title={restaurant?.name}
        phone={MaskPhone(restaurant?.telephone)}
        site={restaurant?.website}
      />
    </>
  );
};
