import { env } from "../envrionments";
import { GetRestaurantPropData, RestaurantData } from "./types";

export const getRestaurantsData = async () => {
  const response = await fetch(`${env.RESTAURANT_ENDPOINT}?page=1&limit=10`);

  const data = await response.json();

  return data.data as RestaurantData[];
};

export const getRestaurantData = async ({ id }: GetRestaurantPropData) => {
  const response = await fetch(`${env.RESTAURANT_ENDPOINT}/${id}`);

  const data = await response.json();

  return data.data as RestaurantData;
};
