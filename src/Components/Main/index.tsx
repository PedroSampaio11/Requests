import { MainContainer } from "./styles";
import { ResgatandoDados } from "../Resgate";
import { AdicionarProd } from "../Adicao";
import { AdicionarProdDinamica } from "../AdicaoDinamica";
export const Main: React.FC = () => {

  return (
    <MainContainer>
      <h1>Listas De Produtos</h1>
      <ResgatandoDados/>
      <AdicionarProd />
      <AdicionarProdDinamica/>
    </MainContainer>
  );
};
