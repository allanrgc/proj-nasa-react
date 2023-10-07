import React, { useState } from "react";
// import Card from "../components/tripCard"
// import { homeButton, registerButton } from "../../routes/coordinator";
import Header from "../../components/Header/header"
import { CardsContainer, Card } from "./styles"
import produtos from "../../components/trip-package/produtos.json"
import Aside from "../../components/Aside/aside"
import {useNavigate} from "react-router-dom"

export default function Home (props) {
  const navigate = useNavigate();
  const [buscaName, setBuscaName] = useState("");
  const [orderValue, setOrderValue] = useState("");
  const [produtosCart, setProdutosCart] = useState([]);
  
  const addProductCart = (produto) => {
    console.log("aqui esá o produto", produto)
    const produtoExistente = produtosCart.find(p => p.id === produto.id);
    console.log("Olha eu aqui dnv", produtoExistente)
    if (produtoExistente != undefined) {
      console.log("passei aqui")
      setProdutosCart((prodAlrInCart) => 
      prodAlrInCart.map(p=>p.id === produto.id
        ? {...p, quantity : p.quantity +1} : p))
      } else {
        console.log("passei aqui no else agora")
        setProdutosCart((prodAlrInCart) => [
          ...prodAlrInCart, {...produto, quantity: 1}])
        }
        
  
      navigate("/cart", { state: { produtosCart } })
    }
    // useEffect(() => {
    //     navigate("/cart");
    // }, [produtosCart, navigate]);
    
  return (
    <div>
    
      <Header />
      <Aside
          buscaName={buscaName}
          setBuscaName={setBuscaName}
          orderValue={orderValue}
          setOrderValue={setOrderValue}/>
      <h1>Página principal</h1>

      <CardsContainer 
        // style={{ 
          //   // backgroundImage: `url(https://`
          // //   backgroundImage: `url(${background})`
          //   }}
          > 
          <Card>
            <p>Viagens 1</p>
            <p>Viagens 2</p>
            <p>Viagens 3</p>
            <p>Viagens 4</p>
          </Card>
          {produtos
          .filter((produtos) => {
            if (
              buscaName &&
              produtos.name.toLowerCase().includes(buscaName)
            ) {
              return produtos;
            } else if (!buscaName) {
              return produtos;
            }
            return false
          })
          .sort((a, b) => {
            if (orderValue === "Maior valor") {
              return a.value < b.value ? -1 : 0;
            } else if (orderValue === "Menor Valor") {
              return a.value < b.value ? 0 : -1;
            }
            return 0;
          })
          .map((produto) => (
          <Card key={produto.id}>
            <img width={200} src={produto.img} alt={produto.name} />

            <h2>{produto.name}</h2>
            <p>Valor: {produto.value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
            <button onClick={() => addProductCart(produto)}>Comprar</button>
            
          </Card>
        ))}
        </CardsContainer>
    </div>
  );
}
