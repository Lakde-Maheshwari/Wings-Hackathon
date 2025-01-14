import React, { createContext, useContext, useMemo } from "react";
import { io } from "socket.io-client";

const socketContext = createContext(null);

// Hook
export const useSocket = () => {
  const socket = useContext(socketContext);
  return socket;
};

export const SocketProvider = ({ children }) => {
  const socket = useMemo(() => io("http://localhost:5000"), []); // Memoize the socket instance
  return (
    <socketContext.Provider value={socket}>
      {children}
    </socketContext.Provider>
  );
};
