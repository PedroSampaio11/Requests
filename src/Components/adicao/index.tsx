import { useState } from "react";
import styled from "styled-components";

export const AdicionarProd = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {};
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
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
