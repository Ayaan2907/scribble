import { useState } from "react";
import { io } from "socket.io-client";
import "./App.css";
const socket = io("http://localhost:4000");

function App() {
  const [socketId, setSocketId] = useState("");
  const [message, setMessage] = useState("");
  socket.on("connect", () => {
    console.log(`Connected to server with id ${socket.id}`);
    setSocketId(socket.id);
  });
  socket.on("message", (msg) => {
    setMessage(msg);
  });
  socket.emit("client-message", "hello");
  return (
    <div className="App">
      <header className="App-header">
        <div>current client socket ID : {socketId}</div>
        <div>{message}</div>
      </header>
    </div>
  );
}

export default App;
