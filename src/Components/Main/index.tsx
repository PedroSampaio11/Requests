import { MainContainer } from "./styles";
import { UseState } from "../Hooks/UseState";
import { Lista } from "../Listas/Lista";
const nome = "pedro"

export const Main: React.FC = () => {
  return <MainContainer  >
    <UseState />
    <Lista/>
  </MainContainer>;
};
