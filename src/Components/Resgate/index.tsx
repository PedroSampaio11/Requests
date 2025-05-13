import React, { useState, useEffect } from "react";
interface Product {
  id: string; // id é uma string
  name: string; // name é uma string
  price: number; // price é um número
}
export const ResgatandoDados: React.FC = () => {
  // URL de onde queremos pegar os dados
  const url = "http://localhost:3000/products";

  // Cria uma "variável" chamada 'products' que começa vazia
  const [products, setProducts] = useState<Product[]>([]);

  // Esse código roda quando o componente for carregado
  useEffect(() => {
    // Função que pega os dados da API
    const fetchData = async () => {
      const res = await fetch(url); // Faz a requisição
      const data = await res.json(); // Converte a resposta para JSON

      // Atualiza a variável 'products' com os dados que pegamos
      setProducts(data);
    };

    fetchData(); // Chama a função para pegar os dados
  }, []); // O efeito só roda uma vez, quando o componente for carregado

  console.log(products); // Mostra os dados no console para você ver

  return (
    <>
      <h2>Resgatando Dados com Fetch API</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} | R$ {p.price}
          </li>
        ))}
      </ul>
    </>
  );
};
