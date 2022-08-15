import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { QueryClientProvider } from "react-query";
import { queryClient } from "../services/queryClient";

import "../styles/_imports.css";
import { GlobalStyle, theme } from "../styles";
import GlobalContext from "../contexts/GlobalContext";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalContext>
          <Component {...pageProps} />
        </GlobalContext>
      </QueryClientProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
