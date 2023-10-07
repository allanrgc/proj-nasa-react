import React, { useState, useEffect } from 'react';

function MarsInfo() {
    const [marsData, setMarsData] = useState(null);

    useEffect(() => {
      // Faz a solicitação à API assim que o componente for montado
    fetch('https://api.le-systeme-solaire.net/rest/bodies/mars')
        .then((response) => response.json())
        .then((data) => {
          // Atualiza o estado com os dados da API
        setMarsData(data);
        })
        .catch((error) => {
        console.error('Erro ao buscar dados da API:', error);
        });
    }, []); // O segundo argumento vazio [] garante que o useEffect seja executado apenas uma vez

    return (
        <div>
            <h1>Informações do Sistema Solar</h1>
            {marsData ? (
                <div>
                <p>Nome: {marsData.englishName}</p>
                {/* <p>Nome: {marsData.moons[0].moon}</p> */}
                {/* <p>Nome: {marsData.moons[1].moon}</p> */}
                {/* Exiba mais informações aqui, de acordo com a estrutura dos dados */}
                <ul>Luas:
                    {marsData.moons.map((moon, index) => (
                        <li key={index}>{moon.moon}</li>
                    ))}
                </ul>
                </div>
            ) : (
                <p>Carregando...</p>
           )}
        </div>
    );
}

export default MarsInfo;