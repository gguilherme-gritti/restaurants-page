import { env } from "../envrionments";
import { GetRestaurantPropData } from "./types";

export const getRestaurantsData = async () => {
  const response = await fetch(env.RESTAURANT_ENDPOINT);

  const data = await response.json();

  return {
    props: {
      restaurants: data.data,
    },
  };
};

export const getRestaurantData = async ({ id }: GetRestaurantPropData) => {
  const response = await fetch(`${env.RESTAURANT_ENDPOINT}/${id}`);

  const data = await response.json();

  return data;
};
