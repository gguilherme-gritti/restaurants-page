import { useSizeWindow } from "../../../utils/SizeWindow";
import {
  Container,
  Content,
  Description,
  Divider,
  WrapperTitle,
  WrapperContact,
} from "./styled";
import { RestaurantDescriptionProps } from "./types";

export const RestaurantDescription = ({
  description,
  priceRange,
  openingHours,
  paymentMethods,
  title,
  phone,
  site,
}: RestaurantDescriptionProps) => {
  const { width } = useSizeWindow();

  return (
    <Container>
      <Content>
        {(width as number) < 768 && (
          <>
            <WrapperTitle>
              <h1>{title}</h1>
            </WrapperTitle>
            <WrapperContact>
              <h4>Contato</h4>
              <p>{phone}</p>
              <p>{site}</p>
            </WrapperContact>
          </>
        )}
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
