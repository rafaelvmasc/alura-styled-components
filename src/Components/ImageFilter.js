import alimentacao from "../assets/images/alimentacao.svg";
import utilidades from "../assets/images/utilidades.svg";
import transporte from "../assets/images/transporte.svg";
import saude from "../assets/images/saude.svg";
import outros from "../assets/images/outros.svg";
import { IconeTema } from "../Components/UI";
import React from "react";

export default (type) => {
  const Images = {
    Restaurante: <IconeTema src={alimentacao} alt={type} />,
    Utilidades: <IconeTema src={utilidades} alt={type} />,
    Transporte: <IconeTema src={transporte} alt={type} />,
    Saude: <IconeTema src={saude} alt={type} />,
    default: <IconeTema src={outros} alt={type} />,
  };

  return Images[type] || Images.default;
};
