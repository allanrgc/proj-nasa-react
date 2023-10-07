import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/header";
import styled from "styled-components";

const ContactContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const ContactInfo = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin: 20px auto;
  max-width: 300px;
`;

const BackButton = styled(Link)`
  text-decoration: none;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function Contact() {
  return (
    <div>
      <Header />
      <ContactContainer>
        <h1>Página de Contato</h1>
        <ContactInfo>
          <p>Telefone: (83) 9988-7890</p>
          <p>Email: touristando@email.com</p>
          <p>Endereço: Rua da fogueira, 45</p>
          <p>Instagram: @tourtistando</p>
        </ContactInfo>
        <BackButton to="/">Voltar para a Página Inicial</BackButton>
      </ContactContainer>
    </div>
  );
}
