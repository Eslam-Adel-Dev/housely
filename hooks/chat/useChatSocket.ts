import { useSocketEmitter } from "@/api/hooks/socket/useSocketEmitter";
import { useSocketListener } from "@/api/hooks/socket/useSocketListener";
import { useSocket } from "@/context/socketContext";
import { useCallback, useEffect } from "react";
import { IMessage } from "react-native-gifted-chat";

interface UseChatSocketProps {
  chatId: string;
  currentUserId: string | undefined;
  receiver: any;
  addMessage: (message: IMessage | IMessage[]) => void;
  updateMessage: (tempId: string, updates: Partial<IMessage>) => void;
}

export const useChatSocket = ({
  chatId,
  currentUserId,
  receiver,
  addMessage,
  updateMessage,
}: UseChatSocketProps) => {
  const { socket } = useSocket();
  const { socketEmitter } = useSocketEmitter();

  const handleUploadStatus = useCallback(
    (data: any) => {
      if (data.status === "uploading") {
        updateMessage(data.tempId, { status: "uploading" } as any);
      }
    },
    [updateMessage],
  );

  const handleReceiveMessage = useCallback(
    (data: any) => {
      // If it's our own message coming back with tempId (reconciliation)
      // We only reconcile if the sender is the current user
      if (data.tempId && data.sender === currentUserId) {
        updateMessage(data.tempId, {
          _id: data._id,
          image: data.image,
          video: data.video,
          status: "sent",
        } as any);
        return;
      }

      // Standard receive for messages from other users
      const formattedMessage: IMessage = {
        _id: data._id,
        text: data.message,
        createdAt: new Date(data.createdAt),
        user: {
          _id: data.sender,
          name: receiver?.name,
          avatar: receiver?.image,
        },
        image: data.image,
        video: data.video,
      };

      addMessage(formattedMessage);
    },
    [addMessage, updateMessage, currentUserId, receiver],
  );

  useSocketListener("receive_message", (data) => {
    console.log("📩 [Socket] Received message:", data);
    handleReceiveMessage(data);
  });

  useSocketListener("upload_status", handleUploadStatus);

  // Room lifecycle
  useEffect(() => {
    const handleConnect = () => {
      if (chatId) {
        socketEmitter("join_conversation", chatId);
        console.log(`📡 [Socket] Joined Room: ${chatId}`);
      }
    };

    // Initial join
    handleConnect();

    // Re-join on every reconnection
    socket.on("connect", handleConnect);

    return () => {
      socket.off("connect", handleConnect);
    };
  }, [chatId, socket, socketEmitter]);

  return {
    socketEmitter,
  };
};
