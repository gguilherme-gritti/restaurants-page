import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles";
import { ScreenDescription } from "./ScreenDescription";

jest.mock("next/router", () => ({
  useRouter: () => ({
    query: { a: 1 },
  }),
}));

describe("ScreenDescription Component", () => {
  it("should render", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ScreenDescription
          title="Descubra novos sabores"
          slogan="Aqui eu converso com você sobre nossa proposta"
        />
      </ThemeProvider>
    );

    expect(getByText("Descubra novos sabores")).toBeInTheDocument();
  });
});
