import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  homeButton,
  loginButton,
  registerButton,
  contactButton,
  destinyButton
} from '../../routes/coordinator';

const HeaderContainer = styled.nav`
  background-color: #007bff;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Title = styled.h1`
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const HeaderButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const renderHeader = () => {
    switch (location.pathname) {
      case '/':
        return (
          <HeaderContainer>
            <Title>Cometatour</Title>
            <ButtonContainer>
              <HeaderButton onClick={() => loginButton(navigate)}>Sair</HeaderButton>
              <HeaderButton onClick={() => destinyButton(navigate)}>Destiny</HeaderButton>
              <HeaderButton onClick={() => contactButton(navigate)}>Contato</HeaderButton>
            </ButtonContainer>
          </HeaderContainer>
        );
      case '/login':
        return (
          <HeaderContainer>
            <Title>Página de Login</Title>
            <ButtonContainer>
              <HeaderButton onClick={() => registerButton(navigate)}>Cadastrar</HeaderButton>
            </ButtonContainer>
          </HeaderContainer>
        );
      case '/register':
        return (
          <HeaderContainer>
            <Title>Página de Cadastro</Title>
            <ButtonContainer>
              <HeaderButton onClick={() => loginButton(navigate)}>Login</HeaderButton>
            </ButtonContainer>
          </HeaderContainer>
        );
      case '/destiny':
        return (
          <HeaderContainer>
            <Title>Página de Destinos</Title>
            <ButtonContainer>
              <HeaderButton onClick={() => homeButton(navigate)}>Home</HeaderButton>
            </ButtonContainer>
          </HeaderContainer>
        );
      case '/contact':
        return (
          <HeaderContainer>
            <Title>Página de Contato</Title>
            <ButtonContainer>
              <HeaderButton onClick={() => homeButton(navigate)}>Home</HeaderButton>
            </ButtonContainer>
          </HeaderContainer>
        );
      case '/cart':
        return (
          <HeaderContainer>
            <Title>Página de Checkout</Title>
            <ButtonContainer>
              <HeaderButton onClick={() => homeButton(navigate)}>Home</HeaderButton>
            </ButtonContainer>
          </HeaderContainer>
        );
      default:
        return (
          <div>
            <h3>Página Inexistente</h3>
            <h2>404 Not Found</h2>
          </div>
        );
    }
  };

  return <div>{renderHeader()}</div>;
}
