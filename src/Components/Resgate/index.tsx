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

const [error, setError] = useState<string | null>(null);

  // useEffect roda uma vez quando o componente é carregado
  useEffect(() => {
    // Função assíncrona para buscar os dados
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url); // Faz a requisição
        const data = await res.json(); // Converte para JSON

        setProducts(data); // Atualiza o estado
      } catch (error) {
        setError("houve um erro")
      }

      setLoading(false); // Finaliza o carregamento
    };

    fetchData(); // Executa a função
  }, []);

  return (
    <div>
      <h2>Resgatando Dados com Fetch API</h2>

      {/* Exibe mensagem de carregamento */}
      {loading && <p>Carregando produtos...</p>}
      {error && <p>{error}</p>}
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
