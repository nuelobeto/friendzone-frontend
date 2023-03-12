import ChatArea from "../components/ChatArea";
import Navbar from "../components/Navbar";
import SendMessage from "../components/SendMessage";

const Chat = () => {
  return (
    <div className="container">
      <Navbar />
      <ChatArea />
      <SendMessage />
    </div>
  );
};

export default Chat;
