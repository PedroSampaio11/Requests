import React, { useState, useEffect } from "react";

// Define a estrutura de um produto
interface Product {
  id: string;
  name: string;
  price: number;
}

export const ResgatandoDados: React.FC = () => {
  // URL da API
  const url = "http://localhost:3000/products";

  // Estado para armazenar os produtos
  const [products, setProducts] = useState<Product[]>([]);

  // Estado para controle de carregamento
  const [loading, setLoading] = useState(false);

  // useEffect roda uma vez quando o componente é carregado
  useEffect(() => {
    setLoading(true);

    // Função assíncrona para buscar os dados
    const fetchData = async () => {
      const res = await fetch(url); // Faz a requisição
      const data = await res.json(); // Converte para JSON

      setProducts(data); // Atualiza o estado
      setLoading(false); // Finaliza o carregamento
    };

    fetchData(); // Executa a função
  }, []);

  return (
    <div>
      <h2>Resgatando Dados com Fetch API</h2>

      {/* Exibe mensagem de carregamento */}
      {loading && <p>Carregando produtos...</p>}

      {/* Lista os produtos */}
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} | R$ {p.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
