import { useEffect, useCallback } from "react";
import { GiftedChat, IMessage } from "react-native-gifted-chat";
import { useSocketEmitter } from "@/api/hooks/socket/useSocketEmitter";
import { useSocketListener } from "@/api/hooks/socket/useSocketListener";

interface UseChatSocketProps {
  chatId: string;
  addMessage: (message: IMessage | IMessage[]) => void;
  updateMessage: (tempId: string, updates: Partial<IMessage>) => void;
}

export const useChatSocket = ({ chatId, addMessage, updateMessage }: UseChatSocketProps) => {
  const { socketEmitter } = useSocketEmitter();

  const handleUploadStatus = useCallback((data: any) => {
    if (data.status === "uploading") {
      updateMessage(data.tempId, { status: "uploading" } as any);
    }
  }, [updateMessage]);

  const handleReceiveMessage = useCallback((data: any) => {
    // If it's our own message coming back with tempId (reconciliation)
    if (data.tempId) {
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
      },
      image: data.image,
      video: data.video,
    };

    addMessage(formattedMessage);
  }, [addMessage, updateMessage]);

  useSocketListener("receive_message", handleReceiveMessage);
  useSocketListener("upload_status", handleUploadStatus);

  // Room lifecycle
  useEffect(() => {
    if (chatId) {
      socketEmitter("join_conversation", chatId);
    }
    
    // Note: If your socket server supports "leave_conversation", 
    // you would add the cleanup return here.
  }, [chatId, socketEmitter]);

  return {
    socketEmitter,
  };
};
