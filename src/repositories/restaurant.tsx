import { env } from "../envrionments";
import { RestaurantData } from "./types";

export const getRestaurantsData = async () => {
  const response = await fetch(`${env.RESTAURANT_ENDPOINT}?page=1&limit=30`);

  const data = await response.json();

  return data.data as RestaurantData[];
};
