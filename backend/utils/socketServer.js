import { Server } from "socket.io";
import { setSocketServerInstance } from "./socketStore.js";
import { newConnectionHandler } from "./newConnectionHandler.js";
import { socketAuth } from "./socketAuth.js";

const registerSocketServer = async (server) => {
  const io = new Server(server, {
    path: "/websocket",
    cors: {
      origin: ["http://localhost:5174", "http://localhost:5173"],
      methods: ["GET", "POST", "PUT", "PATCH"],
    },
  });

  setSocketServerInstance(io);

  // authentication
  io.use((socket, next) => {
    socketAuth(socket, next);
  });

  io.on("connection", (socket) => {
    console.log("A client connected:", socket.id);
    console.log(" connected:", socket.user);
    // saving user in connectionhandler
    newConnectionHandler(socket, io);

    socket.on("admin", (data) => {
      console.log("Received admin event:", data);

      //  respond back to the client
      socket.emit("admin-response", {
        status: "Server acknowledged admin event",
      });
    });

    // Handle disconnection
    socket.on("disconnect", () => {
      console.log("A client disconnected:", socket.id);
    });
  });
};

export { registerSocketServer };
