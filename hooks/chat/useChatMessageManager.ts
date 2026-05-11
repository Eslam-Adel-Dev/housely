import { useState, useEffect, useCallback } from "react";
import { IMessage } from "react-native-gifted-chat";
import { useGetMessages } from "@/api/hooks/useChat";

export const useChatMessageManager = (chatId: string) => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const {
    messages: messagesData,
    receiver,
    isPending,
    isError,
  } = useGetMessages(chatId);

  // Transform API data to GiftedChat format
  useEffect(() => {
    if (messagesData) {
      const formatted = [...messagesData]
        .reverse()
        .map((msg: any) => ({
          _id: msg._id,
          text: msg.message,
          createdAt: new Date(msg.createdAt),
          user: {
            _id: msg.sender?._id || msg.sender,
            name: msg.sender?.name,
            avatar: msg.sender?.image,
          },
          image: msg.image,
          video: msg.video,
        }));
      setMessages(formatted);
    }
  }, [messagesData]);

  const addMessage = useCallback((message: IMessage | IMessage[]) => {
    setMessages((previousMessages) => {
      if (Array.isArray(message)) {
        // GiftedChat.append usually handles this, but we'll use a functional update
        return [...message, ...previousMessages];
      }
      return [message, ...previousMessages];
    });
  }, []);

  const updateMessage = useCallback((tempId: string, updates: Partial<IMessage>) => {
    setMessages((previousMessages) =>
      previousMessages.map((msg) =>
        msg._id === tempId ? { ...msg, ...updates } : msg
      )
    );
  }, []);

  return {
    messages,
    setMessages,
    addMessage,
    updateMessage,
    receiver,
    isPending,
    isError,
  };
};
