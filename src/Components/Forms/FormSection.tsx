import styled from "styled-components";
import { ChangeEvent } from "react";
import { useState } from "react";

export const FormSection: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  // gerenciando estado
  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  console.log(name);
  console.log(email);
// evento para prevenir reload
  const preventSubmit =  (e ) => {
    e.preventDefault()
  }
  return (
    <Container>
      <Form onSubmit={preventSubmit}>
        {/* 1 forma */}
        <Label htmlFor="name"> Nome: </Label>
        <Inputs
          type="text"
          name="name"
          placeholder="digite aqui..."
          onChange={handleName}
        />
        {/* 2 forma */}
        <Label htmlFor="email"> Email: </Label>
        <Inputs
          type="email"
          name="email"
          placeholder="digite aqui..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input type="submit" value={"enviar"} />
      </Form>
    </Container>
  );
};

const Container = styled.section`
  height: 100vh;
  margin-top: 4rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  box-shadow: 0 0 11px 4px rgba(237, 20, 92, 0.44);
  width: 100%;
`;

const Form = styled.form`
  height: 90%;
  width: 50%;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
`;

const Inputs = styled.input`
  all: unset;
  padding: 1rem;
  border: 2px solid #ed145b;
  color: #ed145b;
  font-size: 1.2rem;
  background-color: transparent;
  width: 60%;
  height: 40px;
  border-radius: 8px;
`;
const Input = styled.input`
  all: unset;
  width: 60%;
  height: 44px;
  padding: 0.8rem 4rem;
  border: 2px solid transparent;
  background-color: #ed145b;
  color: #d4d4d4;
  margin-top: 2rem;
  transition: 0.3s ease;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  font-size: 1.7rem;
  font-weight: bold;
  &:hover {
    border: 2px solid #ed145b;
    color: #ed145b;
    background-color: transparent;
  }
`;

const Label = styled.label``;
