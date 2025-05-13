import { useState, useEffect } from "react";
import styled from "styled-components";

interface Product {
  id: string;
  name: string;
  price: number;
}

export const AdicionarProdDinamica = () => {
  const url = "http://localhost:3000/products";
  
  // Guarda os valores digitados no formulário
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [products, setProducts] = useState<Product[]>([]);

  // Função para pegar os produtos da API
  const fetchProducts = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setProducts(data); // Atualiza os produtos
  };

  useEffect(() => {
    fetchProducts(); // Chama a função quando o componente for carregado
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Resgata os valores dos inputs
    const product = {
      name,
      price: parseFloat(price), // Converte o preço para número
    };

    console.log("Produto a ser enviado:", product); // Verifique os dados enviados

    // Envia os dados para a API no formato JSON
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const addedProduct = await res.json();
    console.log("Produto adicionado:", addedProduct); // Verifique a resposta da API

    // Adiciona o novo produto à lista de produtos
    setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // Limpa os campos do formulário
    setName("");
    setPrice("");
  };

  return (
    <Container>
    
      <Form onSubmit={handleSubmit}>
        <h2>dinamico</h2>
        <input
          type="text"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="nome..."
        />
        <input
          type="number"
          value={price}
          name="price"
          onChange={(e) => setPrice(e.target.value)}
          placeholder="preço..."
        />
        <input type="submit" value="criar" />
      </Form>

      
      <ul>
        <h3>Produtos adicionados:</h3>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R$ {product.price}
          </li>
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
  width: 100%;
  border-radius: 22px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  margin-top: 2rem;
  display: flex;
  gap: 2rem;
  justify-content: space-around;
  h2{
    text-align: center;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(204, 204, 204, 0.22);
  padding: 4rem 2rem;
  border-radius: 22px;

  input {
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
  }
`;
