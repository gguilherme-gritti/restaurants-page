import { Card, TextBottom } from "./styled";
import { RestaurantCardProps } from "./types";

export const RestaurantCard = ({
  title,
  srcBackground,
}: RestaurantCardProps) => {
  return (
    <Card srcBackground={srcBackground}>
      <TextBottom>{title}</TextBottom>
    </Card>
  );
};
