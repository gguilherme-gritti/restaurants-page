import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { QueryClientProvider } from "react-query";
import { queryClient } from "../services/queryClient";

import "../styles/_imports.css";
import { GlobalStyle, theme } from "../styles";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
