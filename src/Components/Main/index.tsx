import { MainContainer } from "./styles";
import { UseState } from "../Hooks/UseState";
import { Lista } from "../Listas/Lista";
import { Cond } from "../Condicional";
import { Props } from "../Props";
export interface PropsType {
  name: string;
}
const name = "pedro"
export const Main: React.FC = () => {
  return <MainContainer  >
    <UseState />
    <Lista/>
    <Cond/>
    <Props name= {name}/>
  </MainContainer>;
};
