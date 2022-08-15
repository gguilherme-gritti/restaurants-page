import { Container, Content, Description, Divider } from "./styled";
import { RestaurantDescriptionProps } from "./types";

export const RestaurantDescription = ({
  description,
  priceRange,
  openingHours,
  paymentMethods,
}: RestaurantDescriptionProps) => {
  return (
    <Container>
      <Content>
        <h4>Descrição</h4>
        <Description>{description}</Description>
        <h4>Faixa de Preço</h4>
        <p>{priceRange}</p>
        <Divider />
        <h4>Horários de Funcionamento</h4>
        <p>{openingHours}</p>
        <h4>Formas de pagamento</h4>
        <p>{paymentMethods}</p>
      </Content>
    </Container>
  );
};
