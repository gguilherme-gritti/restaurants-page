import React from "react";

import { TextContextProvider } from "./TextContext";

const GlobalContext: React.FC = ({ children }) => {
  return (
    <>
      <TextContextProvider>{children}</TextContextProvider>;
    </>
  );
};

export default GlobalContext;
