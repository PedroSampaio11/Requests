import styled from "styled-components";
import { useState } from "react";

export const UseState: React.FC = () => {
  const [number, setNumber] = useState(22);
  return (
    <Container>
      <Title> Hooks | Introdução</Title>
      <SubTitle> UseState</SubTitle>
      <SubTitle> o valor atual é : {number}</SubTitle>
      <Button
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        diminuir
      </Button>
      <Button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        aumentar
      </Button>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid ${(props) => props.theme.colors.purple500};
  width: 100%;
  height: 300px;
  border-radius: 8px;
  margin-top: 2rem;
  text-align: center;
  padding: 2rem;
  box-shadow: 0 0 11px 4px rgba(237, 20, 92, 0.44);
`;
const Title = styled.h2`
  font-size: 1.7rem;
  font-weight: 600;
`;
const SubTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.grey600};
  transition: 0.3s ease;
  &:hover {
    color: ${(props) => props.theme.colors.purple500};
  }
`;

const Button = styled.button`
  all: unset;
  padding: 1.5rem 4rem;
  border: 2px solid ${(props) => props.theme.colors.purple500};
  margin-right:1rem ;
`;
