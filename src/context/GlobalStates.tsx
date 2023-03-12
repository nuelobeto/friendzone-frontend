import React, { createContext, useState } from "react";

type ProviderT = {
  children: React.ReactNode;
};

type Message = {
  room: string;
  sender: string;
  message: string;
  time: string;
};

type ContextT = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  room: string;
  setRoom: React.Dispatch<React.SetStateAction<string>>;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
};

export const GlobalContext = createContext<ContextT>({} as ContextT);

export const GlobalProvider = ({ children }: ProviderT) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <GlobalContext.Provider
      value={{
        name,
        setName,
        room,
        setRoom,
        messages,
        setMessages,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
