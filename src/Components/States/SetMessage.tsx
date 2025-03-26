import React from 'react';

// Tipando a prop 'handleMessage' como uma função que recebe uma string
interface SetMessageProps {
  handleMessage: (msg: string) => void;
}

export const SetMessage: React.FC<SetMessageProps> = ({ handleMessage }) => {
  const mensagens = ['oi', 'ola', 'bom dia'];

  return (
    <div>
      <button onClick={() => handleMessage(mensagens[0])}>1</button>
      <button onClick={() => handleMessage(mensagens[1])}>2</button>
      <button onClick={() => handleMessage(mensagens[2])}>3</button>
    </div>
  );
};
