import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles";
import { RestaurantCard } from "./RestaurantCard";

jest.mock("next/router", () => ({
  useRouter: () => ({
    query: { a: 1 },
  }),
}));

describe("RestaurantCard Component", () => {
  it("should render", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <RestaurantCard title="Mamma mia" srcBackground="" id="1" />
      </ThemeProvider>
    );

    expect(getByText("Mamma mia")).toBeInTheDocument();
  });
});
