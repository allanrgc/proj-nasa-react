import React from "react";
import { Container } from "./styles";

const Aside = ({
  buscaName,
  setBuscaName,
  orderValue,
  setOrderValue,
}) => {

  return (
    <Container>
      <input
        value={buscaName}
        onChange={(e) => {
          setBuscaName(e.target.value);
        }}
        type="text"
        placeholder="Produto"
      />
      <select
        value={orderValue}
        onChange={(e) => {
          setOrderValue(e.target.value);
        }}
      >
        <option value="">Preço</option>
        <option value="Maior valor">Crescente</option>
        <option value="Menor valor">Decrescente</option>
      </select>
    </Container>
  );
};

export default Aside;