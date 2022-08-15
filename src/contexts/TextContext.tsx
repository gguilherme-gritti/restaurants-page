import React, { createContext, useState } from "react";

//Tipando as Props do contexto
type PropsTextContext = {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};

//Valor default do contexto
const DEFAULT_VALUE = {
  state: "",
  setState: () => {}, //função de inicialização
};

const TextContext = createContext<PropsTextContext>(DEFAULT_VALUE);

/**
 * Função que irá conter o estado e função que irá alterar o estado 'setState'
 * quer irá prover o contexto para os componentes filhos da árvore
 */
const TextContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  return (
    <TextContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </TextContext.Provider>
  );
};

export { TextContextProvider };
export default TextContext;
