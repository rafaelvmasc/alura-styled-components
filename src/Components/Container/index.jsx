import React from "react";
import styled from "styled-components";

import Titulo from "../Titulo";
import Conta from "../Conta";
import Extrato from "../Extrato"
import { transitionEffectTheme } from "../UI/Variaveis";

const Container = styled.div`
  background-color: ${({theme})=> theme.body};
  transition: ${transitionEffectTheme};
  min-height: 90vh;
  padding: 0px 15vw;
`;
const Conteudo = styled.section`
  display: flex;
  flex-direction: row;
  transition: ${transitionEffectTheme};

  justify-content: space-between;
  color: ${({theme})=>theme.text};

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export default () => {
  return (
    <Container>
      <Titulo>Olá Rafael!</Titulo>
      <Conteudo>
        <Conta />
        <Extrato />
      </Conteudo>
    </Container>
  );
};
