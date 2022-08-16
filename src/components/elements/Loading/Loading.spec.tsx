import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles";
import { Loading } from "./Loading";

jest.mock("next/router", () => ({
  useRouter: () => ({
    query: { a: 1 },
  }),
}));

describe("Loading Component", () => {
  it("should render", () => {
    const { getByAltText } = render(
      <ThemeProvider theme={theme}>
        <Loading />
      </ThemeProvider>
    );

    expect(getByAltText("Loading")).toBeInTheDocument();
  });
});
