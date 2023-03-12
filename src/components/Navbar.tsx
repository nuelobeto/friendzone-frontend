import "../assets/scss/navbar.scss";
import { USER } from "../assets/images";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./../context/GlobalStates";
import { MdArrowBack } from "react-icons/md";
import Identicon from "react-identicons";

const Navbar = () => {
  const { setMessages, name, room } = useContext(GlobalContext);
  const [color, setColor] = useState("");
  const navigate = useNavigate();

  const exitChat = () => {
    setMessages([]);
    navigate("/");
  };

  const generateColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  useEffect(() => {
    if (!color) {
      generateColor();
    }
  }, [color]);

  return (
    <nav>
      <div className="toolbar">
        <div className="user">
          <div className="user-img">
            <Identicon string={name} size={40} palette={[color]} />
          </div>
          <span>{name}</span>
        </div>

        <div className="tools">
          <button className="exit-chat" onClick={exitChat}>
            <MdArrowBack />
          </button>
          <button className="share-room">{room}</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
