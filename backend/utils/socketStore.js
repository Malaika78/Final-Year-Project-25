let io = null;
const connectedUsers = new Map();

export const setSocketServerInstance = (ioInstance) => {
  io = ioInstance;
};

export const getSocketServerInstance = () => io;

export const getSocketIdByUserId = (userId) => {
  let socketId = null;
  connectedUsers.forEach((value, key) => {
    if (value.id === userId) {
      socketId = key;
    }
  });
  return socketId;
};

export const addNewConnectedUser = ({ socketId, userId, type }) => {
  for (const [key, value] of connectedUsers.entries()) {
    if (value.id === userId) {
      connectedUsers.delete(key);
      break;
    }
  }
  return connectedUsers.set(socketId, { id: userId, type });
};
