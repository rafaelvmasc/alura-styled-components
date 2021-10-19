import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { TemaClaro, TemaEscuro } from "./Components/UI/temas";

import { GlobalStyle } from "./Components/GlobalStyle";
import Container from "./Components/Container";
import Cabecalho from "./Components/Cabecalho";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

function App() {
  const [tema, setTema] = useState(true);

  return (
    <>
      <ThemeProvider theme={tema ? TemaEscuro : TemaClaro}>
        <GlobalStyle />
        <BtnTema
          onClick={() => {
            setTema(!tema);
          }}
        >
          <SwitcherTema tema={!tema} />
        </BtnTema>
        <Cabecalho />
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
