import { MainContainer } from "./styles";
const nome = "pedro"
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log(e)
}

const Render = () => {
  if(true){
    return <h1>renderizando...</h1>
  }
}
export const Main: React.FC = () => {
  return <MainContainer  data-aos="fade-left" data-aos-duration="500">
    ola {nome},
    clique nesse botao
    <button onClick={handleClick}> TEST </button>
    {Render()}
  </MainContainer>;
};
