import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";
// types import
import { storage } from "@/lib/mmkvStorage";
import { SocketContextType, SocketProviderProps } from "@/types/type";

//================================================

const socketContext = createContext<SocketContextType | null>(null);

const Environment = process.env.NODE_ENV;

const URL =
  Environment === "development"
    ? process.env.EXPO_PUBLIC_BACKEND_URL_DEV
    : process.env.EXPO_PUBLIC_BACKEND_URL;

//================================================

const SocketProvider = ({ children }: SocketProviderProps) => {
  const [isConnected, setIsConnected] = useState(false);

  // Create a single, stable socket instance
  const socket = useMemo(() => {
    console.log("Initializing Socket with URL:", URL);
    return io(`${URL}`, {
      autoConnect: true,
      transports: ["websocket"],
      auth: {
        token: storage.getString("token"),
      },
    });
  }, []);

  // listen to socket events
  useEffect(() => {
    function onConnect() {
      console.log("Socket Connected ✅");
      setIsConnected(true);
    }

    function onDisconnect() {
      console.log("Socket Disconnected ❌");
      setIsConnected(false);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, [socket]);

  // Memoize the context value
  const socketObj = useMemo(
    () => ({
      socket,
      isConnected,
      setIsConnected,
    }),
    [socket, isConnected],
  );

  // return the socket context
  return (
    <socketContext.Provider value={socketObj}>
      {children}
    </socketContext.Provider>
  );
};

export default SocketProvider;

//================================================

export const useSocket = () => {
  const socket = useContext(socketContext);
  if (!socket) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return socket;
};
