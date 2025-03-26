import styled from "styled-components";
import { PropsType} from "../Main";
import { Filho } from "./FunctionProps";
export const Props: React.FC<PropsType> = ({name}) => {
  function showMessage(){ console.log('function props check')}
  return (
    <Container>
      <Title>
        Props
      </Title>
      <SubTitle>
       o nome é: {name}
      </SubTitle>
      <Filho myFunction = {showMessage}/>
    </Container>
  )
}
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