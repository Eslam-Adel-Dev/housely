import { useUserStore } from "@/store/userStore";
import { useChatMessageManager } from "./useChatMessageManager";
import { useChatSocket } from "./useChatSocket";
import { useChatActions } from "./useChatActions";

export const useChatSession = (chatId: string) => {
  const { user } = useUserStore();
  
  const { 
    messages, 
    addMessage, 
    updateMessage, 
    receiver, 
    isPending, 
    isError 
  } = useChatMessageManager(chatId);

  const { socketEmitter } = useChatSocket({ 
    chatId, 
    addMessage, 
    updateMessage 
  });

  const { 
    onSend, 
    handleMediaPicker, 
    sheetVisible, 
    setSheetVisible 
  } = useChatActions({
    chatId,
    user,
    receiver,
    socketEmitter,
    addMessage,
  });

  return {
    // Data state
    messages,
    receiver,
    user,
    
    // Status state
    isPending,
    isError,
    
    // Actions & UI state
    onSend,
    handleMediaPicker,
    sheetVisible,
    setSheetVisible,
  };
};
