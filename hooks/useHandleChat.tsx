import { useCreateConversation } from "@/api/hooks/useChat";
import { useRouter } from "expo-router";

//=============================================

export const useHandleChat = () => {
  const router = useRouter();
  const { createConversation } = useCreateConversation();

  const handleChat = (id: string) => {
    createConversation(
      { receiverId: id },

      {
        onSuccess: (data) => {
          const convoID = data?.data?._id;
          router.push(`/chat/${convoID}`);
        },
      },
    );
  };
  return { handleChat };
};
