import { RestaurantDescription, RestaurantHeader } from "../../patterns";

export const RestaurantDetail = () => {
  return (
    <>
      <RestaurantHeader
        restaurantBg="https://loremflickr.com/640/480/cuisine"
        restaurantLogo="https://loremflickr.com/500/500/logo"
        title="Mamma mia"
        phone="19999999999"
        site="www.mammamia.com.br"
      />
      <RestaurantDescription
        description="Restaurant 1 lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue orci erat, vitae bibendum arcu tempor ac. Suspendisse eget dignissim mi. Ut semper eros nulla, non sagittis mi imperdiet quis. Sed eget libero velit. Interdum et malesuada fames ac ante ipsum primis in faucibus."
        priceRange="De R$ 40,00 a R$ 70,00 por pessoa"
        openingHours="De terça à domingo, das 17:00 ãs 23:00."
        paymentMethods="Dinheiro, cartão de crédito e débito."
      />
    </>
  );
};
