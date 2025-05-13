import { MainContainer } from "./styles";
import { ResgatandoDados } from "../Resgate";
import { AdicionarProd } from "../adicao";
export const Main: React.FC = () => {

  return (
    <MainContainer>
      <h1>Listas De Produtos</h1>
      <ResgatandoDados/>
      <AdicionarProd />
    </MainContainer>
  );
};
