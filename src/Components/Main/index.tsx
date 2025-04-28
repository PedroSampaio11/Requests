import { MainContainer } from "./styles";
import { UseState } from "../Hooks/UseState";
import { Lista } from "../Listas/Lista";
import { StateLift } from "../States/StateLift";
import { Cond } from "../Condicional";
import { Props } from "../Props";
import { FormSection } from "../Forms/FormSection";
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
    <StateLift/>
    <FormSection/>
  </MainContainer>;
};
