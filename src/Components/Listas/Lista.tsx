import { useState } from "react";
import styled from "styled-components";

export const Lista = () => {
  // quando nao tem id ou nao vem do banco de dados usar index
  const [stacks] = useState([
    "React",
    "Node.js",
    "JavaScript",
    "CSS",
    "Styled-Components",
  ]);
  // mais usado
  const [users] = useState([
    { id: 222, nome: "pedro" },
    { id: 444, nome: "luiz" },
    { id: 777, nome: "thais" },
    { id: 111, nome: "maya" },
  ]);
  return (
    <Container data-aos="fade-left" data-aos-duration="500">
      <Title >Renderização de Lista</Title>
      <SubTitle> aqui estão as stacks usadas nesse curso: </SubTitle>
      <SubTitle>com id:</SubTitle>
      <List>
        {users.map((user) => (
          <Stack key={user.id}> {user.nome} </Stack>
        ))}
      </List>
      <SubTitle>com index:</SubTitle>
      <List>
        {stacks.map((stack, index) => (
          <Stack key={index}> {stack}</Stack>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid ${(props) => props.theme.colors.purple500};
  width: 100%;
  height: auto;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
  text-align: center;
  &:hover {
    color: ${(props) => props.theme.colors.purple500};
  }
`;
const List = styled.ul`
  text-align: left;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(237, 20, 92, 0.44);
  margin: 0;
  padding: 0;
  :nth-child(odd) {
    color: ${(props) => props.theme.colors.purple500};
  }
`;

const Stack = styled.li`
  list-style: none;
  margin-bottom: 0.2rem;
  color: ${(props) => props.theme.colors.grey600};
  text-align: center;
`;
