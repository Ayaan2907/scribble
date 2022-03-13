import { useState } from "react";
import { io } from "socket.io-client";
import "./App.css";
const socket = io("http://localhost:4000");

function App() {
  const [socketId, setSocketId] = useState("");
  socket.on("connect", () => {
    setSocketId(socket.id);
    console.log(`Connected to server with id ${socket.id}`);
  });
  return (
    <div className="App">
      <header className="App-header">
        <div>current client socket ID :    {socketId}</div>
      </header>
    </div>
  );
}

export default App;
