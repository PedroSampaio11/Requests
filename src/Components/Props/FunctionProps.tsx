interface FunctionPropsType {
  myFunction: () => void;
}

export const Filho: React.FC<FunctionPropsType> = ({ myFunction }) => {
  return (
    <>
      <button onClick={myFunction}>Execute a Função via Props</button>
    </>
  );
};
