// react imports
import { useEffect } from "react";
// context imports
import { useSocket } from "@/context/socketContext";

//================================================

export const useSocketListener = (
  event: string,
  callback: (data: any) => void,
) => {
  const { socket } = useSocket();

  useEffect(() => {
    if (!socket) return;

    socket.on(event, callback);

    return () => {
      socket.off(event, callback);
    };
  }, [event, callback, socket]);
};
