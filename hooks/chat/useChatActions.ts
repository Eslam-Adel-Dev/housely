import { useCallback, useEffect, useState } from "react";
import { IMessage } from "react-native-gifted-chat";
import { useMediaPicker } from "@/hooks/useMediaPicker";
import { convertToBase64 } from "@/lib/utils";

interface UseChatActionsProps {
  chatId: string;
  user: any;
  receiver: any;
  socketEmitter: any;
  addMessage: (message: IMessage | IMessage[]) => void;
}

export const useChatActions = ({
  chatId,
  user,
  receiver,
  socketEmitter,
  addMessage,
}: UseChatActionsProps) => {
  const { handleMediaPicker, media, setMedia } = useMediaPicker();
  const [sheetVisible, setSheetVisible] = useState(false);

  const onSend = useCallback(
    (newMessages: IMessage[] = []) => {
      let messageToSend: any;
      const tempId = Date.now().toString();

      if (media) {
        messageToSend = {
          text: "",
          _id: tempId,
          createdAt: new Date(),
          image: media.type === "image" ? media.uri : undefined,
          video: media.type === "video" ? media.uri : undefined,
          user: {
            _id: user?._id || 1,
          },
          status: "pending",
        };

        // Handle Media sending
        const processMedia = async () => {
          try {
            let base64Data: string;
            
            if (media.type === "image" && media.base64) {
              base64Data = `data:${media.mimeType || "image/jpeg"};base64,${media.base64}`;
            } else {
              base64Data = await convertToBase64(media.uri);
            }

            socketEmitter("send_message", {
              conversationId: chatId,
              sender: user?._id,
              receiver: receiver?._id,
              message: "",
              image: media.type === "image" ? base64Data : undefined,
              video: media.type === "video" ? base64Data : undefined,
              tempId,
            });
          } catch (error) {
            console.error("Failed to process media for chat:", error);
          }
        };

        processMedia();
        setMedia(null);
      } else if (newMessages.length > 0) {
        messageToSend = { ...newMessages[0], _id: tempId };

        socketEmitter("send_message", {
          conversationId: chatId,
          sender: user?._id,
          receiver: receiver?._id,
          message: messageToSend.text,
          tempId,
        });
      }

      if (messageToSend) {
        addMessage(messageToSend);
      }
    },
    [media, setMedia, socketEmitter, chatId, user?._id, receiver?._id, addMessage]
  );

  // Auto-send when media is picked
  useEffect(() => {
    if (media) {
      onSend();
    }
  }, [media, onSend]);

  return {
    onSend,
    handleMediaPicker,
    sheetVisible,
    setSheetVisible,
  };
};
