import { useContext, useEffect } from "react";
import "../assets/scss/chatarea.scss";
import { socket } from "../config/socket-io";
import { GlobalContext } from "./../context/GlobalStates";

type Message = {
  room: string;
  sender: string;
  message: string;
  time: string;
};

const ChatArea = () => {
  const { name, messages, setMessages } = useContext(GlobalContext);
  const messageContainer = document.querySelector(".message-container");

  useEffect(() => {
    const handleMessageSent = (data: Message) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    };

    socket.on("message_sent", handleMessageSent);

    return () => {
      socket.off("message_sent", handleMessageSent);
    };
  }, [socket]);

  useEffect(() => {
    if (messageContainer) {
      messageContainer.scrollTop = messageContainer?.scrollHeight;
    }
  }, [messages, messageContainer]);

  return (
    <div className="chat-area">
      <div className="message-container">
        {messages.map((message, index) => (
          <div
            key={index}
            className="message"
            id={name === message.sender ? "you" : "other"}
          >
            <div className="message-inner">
              <span className="text">{message.message}</span>
              <span className="time">{message.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatArea;
