import React from "react";
import styled from "styled-components";
import { corPrimaria } from "../UI/Variaveis";

const Item = styled.div`
  display: flex;
  flex-direction: column;

  .text {
    font-weight: bold;
    color: ${corPrimaria};
  }
`;

export default ({ type, from, value }) => {
  return (
    <Item>
      <span className="text">{type}</span>
      <span>{from}</span>
      <span>{value}</span>
    </Item>
  );
};
