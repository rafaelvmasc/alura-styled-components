import React from "react";
import ThemeOn from "../../assets/images/themeOn.svg";
import ThemeOff from "../../assets/images/themeOff.svg";
import { Icone } from "../UI";

const Claro = <Icone src={ThemeOn} alt="Tema Claro"></Icone>;
const Escuro = <Icone src={ThemeOff} alt="Tema Escuro"></Icone>;


export default ({tema}) => (tema ? Escuro : Claro)