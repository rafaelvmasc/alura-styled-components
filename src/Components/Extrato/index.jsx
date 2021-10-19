import React from "react";
import { extratoLista } from "../../info";
import Items from "../Items";
import { Botao, Box } from "../UI";

function Extrato() {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, value, date, from }) => {
        return (
          <Items
            key={id}
            type={type}
            from={from}
            value={value}
            date={date}
          ></Items>
        );
      })}
      <Botao>Ver Mais</Botao>
    </Box>
  );
}

export default Extrato;
