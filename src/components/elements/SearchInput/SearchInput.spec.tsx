import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import GlobalContext from "../../../contexts/GlobalContext";
import { theme } from "../../../styles";
import { SearchInput } from "./SearchInput";

jest.mock("next/router", () => ({
  useRouter: () => ({
    query: { a: 1 },
  }),
}));

describe("SearchInput Component", () => {
  it("should render", () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <GlobalContext>
          <SearchInput />
        </GlobalContext>
      </ThemeProvider>
    );

    expect(getByPlaceholderText("Encontre um restaurante")).toBeInTheDocument();
  });
});
