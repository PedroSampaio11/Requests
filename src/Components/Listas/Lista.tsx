import { useState } from "react";
import styled from "styled-components";
export const Lista = () => {
  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);  
    setUsers((prev) => {
      return prev.filter((user) => randomNumber !== user.id); 
    });
  };
  // quando nao tem id ou nao vem do banco de dados usar index
  const [stacks] = useState([
    "React",
    "Node.js",
    "JavaScript",
    "CSS",
    "Styled-Components",
  ]);
  // mais usado
  const [users, setUsers] = useState([
    { id: 1, nome: "pedro" },
    { id: 2, nome: "luiz" },
    { id: 3, nome: "thais" },
    { id: 4, nome: "maya" },
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
      <Button onClick={deleteRandom}  >
        apagar com previous state
      </Button>
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

const Button = styled.button`
  all: unset;
  padding: 1.5rem 4rem;
  border: 2px solid ${(props) => props.theme.colors.purple500};
  margin-right:1rem ;
`;