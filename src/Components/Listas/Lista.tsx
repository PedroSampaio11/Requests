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
    {id:222, nome: 'pedro'},
    {id:444, nome: 'luiz'}
  ])
  return (
    <Container>
      <Title>Renderização de Lista</Title>
      <SubTitle> aqui estão as stacks usadas nesse curso: </SubTitle>
      <List>
        {users.map((user) => (
          <Stack key={user.id}> {user.nome} </Stack>
        ))}
      </List>
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
const List = styled.ul`
  text-align: left;
  width: 33%;
  margin: 0 auto;
  :nth-child(odd) {
    color: ${(props) => props.theme.colors.purple500};
  }
`;

const Stack = styled.li`
  list-style: none;
  margin-bottom: 0.2rem;
  color: ${(props) => props.theme.colors.grey600};
`;
