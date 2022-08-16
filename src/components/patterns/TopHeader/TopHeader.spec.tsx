import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import GlobalContext from "../../../contexts/GlobalContext";
import { theme } from "../../../styles";
import { TopHeader } from "./TopHeader";

jest.mock("next/router", () => ({
  useRouter: () => ({
    query: { a: 1 },
  }),
}));

describe("TopHeader Component", () => {
  it("should render", () => {
    const { getByAltText } = render(
      <ThemeProvider theme={theme}>
        <GlobalContext>
          <TopHeader />
        </GlobalContext>
      </ThemeProvider>
    );

    expect(getByAltText("MeuApp logotipo")).toBeInTheDocument();
  });
});
