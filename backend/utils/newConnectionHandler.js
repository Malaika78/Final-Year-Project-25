import { addNewConnectedUser } from "./socketStore.js";

export const newConnectionHandler = async (socket) => {
  try {
    // Validate user object and ID
    const user = socket.user;
    return addNewConnectedUser({
      socketId: socket.id,
      userId: user?.id,
    });
  } catch (error) {
    console.error("Error handling new connection:", error);
  }
};
