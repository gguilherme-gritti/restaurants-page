import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles";
import { RestaurantDescription } from "./RestaurantDescription";

jest.mock("next/router", () => ({
  useRouter: () => ({
    query: { a: 1 },
  }),
}));

describe("RestaurantDescription Component", () => {
  it("should render", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <RestaurantDescription
          description=""
          priceRange=""
          openingHours=""
          paymentMethods="debito"
          title=""
          phone=""
          site=""
        />
      </ThemeProvider>
    );

    expect(getByText("debito")).toBeInTheDocument();
  });
});
