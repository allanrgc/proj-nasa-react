import styled from "styled-components";

export const CardsContainer = styled.div`
    display: flex;
    // justify-items: center;
    justify-content: center;
    // background: white;
    padding: 30px;
  `;

export const Card = styled.div`
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