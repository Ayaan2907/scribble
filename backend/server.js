// const express = require("express");
// const express = require("express");
// const app = express();
import { Server } from "socket.io";
const PORT = 4000;
const io = new Server({
  cors: {
    origin: ["http://localhost:3000"],
  },
});
io.on("connection", (socket) => {
  console.log(`connected client id: ${socket.id}`);
  socket.emit("message", `hello my dear ${socket.id}`);
  socket.on("client-message", (msg) => {
    console.log(msg);
  })
});


io.listen(PORT);
// app.get("/", (req, res) => {
// res.send("Hello World!");
// });
// app.listen(PORT, () => {
// console.log(`Server is listening on port ${PORT}`);
// });
