import { useState } from "react";
import styled from "styled-components";

export const AdicionarProd = () => {
  const url = "http://localhost:3000/products";
  // Guarda os valores digitados no formulário.
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // resgata oq foi digitado nos inputs, como se fosse ame: name e price: price
    const product = {
      name,
      price,
    };
    console.log(product);

    // Envia os dados para a API no formato JSON:
    const res = await fetch(url, {
      // envia dados
      method: "POST",
      // diz que o conteúdo é JSON
      headers: {
        "Content-Type": "application/json",
      },
      // transforma o objeto em texto JSON
      body: JSON.stringify(product),
    });
  };

  return (
    <Container>
      {/* 	Executa a função quando o formulário for enviado */}
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          name="name"
          // Sempre que o usuário digitar algo nesse input, atualize o estado com o valor digitado.
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
    </Container>
  );
};
const Container = styled.div`
  border: 1px solid ${(props) => props.theme.colors.purple500};
  padding: 7rem 0;
  width: 100%;
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
  gap: 1rem;
  width: 40%;
  border: 1px solid rgba(237, 20, 92, 0.22);
  color: white;
  border-radius: 22px;

  input {
    all: unset;
    border: 1px solid ${(props) => props.theme.colors.purple500};
    border-radius: 22px;
    width: 50%;
    padding: 1rem;

    font-size: 1rem;
  }
  input[type="submit"] {
    background-color: ${(props) => props.theme.colors.purple500};
    text-align: center;
    font-size: 1.4rem !important;
  }
`;
