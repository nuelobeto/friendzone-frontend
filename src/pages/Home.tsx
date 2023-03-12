import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/scss/home.scss";
import { socket } from "../config/socket-io";
import { GlobalContext } from "./../context/GlobalStates";

const Home = () => {
  const { name, setName, room, setRoom } = useContext(GlobalContext);
  const navigate = useNavigate();

  // const generateRandomString = (length: number) => {
  //   let result = "";
  //   const characters =
  //     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //   const charactersLength = characters.length;
  //   for (let i = 0; i < length; i++) {
  //     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  //   }
  //   return result;
  // };

  const joinRoom = () => {
    if (!name) {
      alert("Enter your name");
      return;
    }
    socket.emit("create_room", room);
  };

  useEffect(() => {
    socket.on("room_created", () => {
      navigate("/chat");
    });
  }, [socket, navigate]);

  return (
    <div className="container">
      <div className="home">
        <h1>Welcome to Friendzone</h1>
        <p>Join a chat room</p>
        <div className="create-chat">
          <input
            type="text"
            placeholder="Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Room ID"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
          <button onClick={joinRoom}>Join chat room</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
