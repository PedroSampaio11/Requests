import React from 'react';

// Tipando a prop 'msg' como string
interface MessageProps {
  msg: string;
}

export const Message: React.FC<MessageProps> = ({ msg }) => {
  return (
    <div>
      <h2>A mensagem é: {msg}</h2>
    </div>
  );
};
