import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles";

import { RestaurantHeader } from "./RestaurantHeader";

jest.mock("next/router", () => ({
  useRouter: () => ({
    query: { a: 1 },
  }),
}));

describe("RestaurantHeader Component", () => {
  it("should render", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <RestaurantHeader
          restaurantBg=""
          restaurantLogo=""
          title="Mamma Mia"
          phone=""
          site=""
        />
      </ThemeProvider>
    );

    expect(getByText("Mamma Mia")).toBeInTheDocument();
  });
});
