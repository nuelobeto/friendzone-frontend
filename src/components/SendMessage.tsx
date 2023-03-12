import "../assets/scss/sendmessage.scss";
import { RiSendPlaneFill } from "react-icons/ri";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalStates";
import { socket } from "../config/socket-io";

const SendMessage = () => {
  const { name, room, setMessages } = useContext(GlobalContext);
  const [message, setMessage] = useState("");
  const [typing, setTyping] = useState(false);
  const [otherPerson, setOtherPerson] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    socket.emit("typing", name);
    setMessage(event.target.value);
  };

  const sendMessage = async () => {
    if (!message) {
      return;
    }
    const payload = {
      room,
      sender: name,
      message,
      time:
        new Date(Date.now()).getHours() +
        ":" +
        new Date(Date.now()).getMinutes(),
    };

    await socket.emit("send_message", payload);

    setMessage("");
    setMessages((prevMessages) => [...prevMessages, payload]);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };

  socket.on("typing", (data) => {
    if (data !== name) {
      setOtherPerson(data);
      setTyping(true);
      setTimeout(() => setTyping(false), 2000);
    }
  });

  return (
    <div className="send-msg">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder={
            !typing ? "type something..." : `${otherPerson} is typing...`
          }
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <RiSendPlaneFill onClick={sendMessage} />
      </div>
    </div>
  );
};

export default SendMessage;
