import React from 'react'
import produtos from "../components/trip-package/produtos.json"
import styled from "styled-components"


const Card = styled.div`
  width: 300px;
  margin: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: white;
  padding: 16px;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
  }

  h3 {
    font-size: 18px;
    margin: 8px 0;
  }

  p {
    font-size: 14px;
    margin: 8px 0;
  }

  button {
    background: #007bff;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s ease-in-out;

    &:hover {
      background: #0056b3;
    }
  }
`;

const ProductCard = () => {
    
  return (
    <div>
      {produtos.map((produto) => {
        return (
          <Card key={produto.id}>
            <img width={200} src={produto.img} alt={produto.name} />
            <p>Nome do Item: {produto.name}</p>
            <p>Valor: R${produto.value}</p>
            <button>Detalhes</button>
            <button>Comprar</button>
          </Card>
        );
      })}
    </div>
  );
};

export default ProductCard;

// import React from 'react';

// const ProductCard = ({ produto, addProductCart }) => {
//   const { nome, preco } = produto;

//   return (
//     <div>
//       <div>
//         <p>Nome do Item: {nome}</p>
//         <p>Preço: R$ {preco}</p>
//         <button onClick={() => addProductCart(produto)}>Adicionar ao Carrinho</button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
