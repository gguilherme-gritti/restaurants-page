import { Card, TextBottom } from "./styled";
import { RestaurantCardProps } from "./types";
import { useRouter } from "next/router";

export const RestaurantCard = ({
  title,
  srcBackground,
  id,
}: RestaurantCardProps) => {
  const { push } = useRouter();

  return (
    <Card
      srcBackground={srcBackground}
      onClick={() => push(`/restaurant/${id}`)}
    >
      <TextBottom>{title}</TextBottom>
    </Card>
  );
};
