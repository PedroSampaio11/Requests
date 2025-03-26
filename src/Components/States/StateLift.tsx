import { useState } from "react";
import { Message } from "./Message";
import { SetMessage } from "./SetMessage";

export const StateLift = () => {
  const [message, setMessage] = useState<string>(""); // Estado corrigido

  const handleMessage = (msg: string) => {
    setMessage(msg); // Atualiza a mensagem
  };

  return (
    <>
      <Message msg={message} /> {/* Passando o estado correto */}
      <SetMessage handleMessage={handleMessage} />
    </>
  );
};
