import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import "../styles/_imports.css";
import { GlobalStyle, theme } from "../styles";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
