// react imports
import { useCallback } from "react";
// context imports
import { useSocket } from "@/context/socketContext";

//========================================================

export const useSocketEmitter = () => {
  const { socket } = useSocket();

  const socketEmitter = useCallback(
    (event: string, data: any) => {
      if (!socket) return;
      socket.emit(event, data);
    },
    [socket],
  );

  return { socketEmitter };
};
