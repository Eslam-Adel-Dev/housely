import { useUserStore } from "@/store/userStore";
import { ENDPOINTS } from "../config/endpoints";
import { QUERY_KEYS } from "../config/queryKeys";
import { useGetHook, usePostHook } from "./useMethods";
//=========================================

export const useCreateConversation = () => {
  const { data, mutate, isPending, isError, isSuccess } = usePostHook(
    ENDPOINTS.MESSAGES.CREATE_CONVERSATION,
  );

  return {
    data,
    createConversation: mutate,
    isPending,
    isError,
    isSuccess,
  };
};

//=========================================

export const useGetConversations = () => {
  const { user } = useUserStore();

  const { data, isError, isPending, isSuccess, isFetched, refetch } =
    useGetHook(
      ENDPOINTS.MESSAGES.CONVERSATIONS,
      [QUERY_KEYS.MESSAGES.CONVERSATIONS, user?._id],
      undefined,
      {
        refetchOnMount: "always",
        staleTime: 0,
      },
    );

  const conversations = data?.data;

  return {
    conversations,
    isError,
    isPending,
    isSuccess,
    isFetched,
    refetch,
  };
};

//=========================================

export const useGetMessages = (conversationId: string) => {
  const { data, isError, isPending, isSuccess, isFetched, refetch } =
    useGetHook(
      `${ENDPOINTS.MESSAGES.MESSAGES}/${conversationId}`,
      [QUERY_KEYS.MESSAGES.MESSAGES, conversationId],
      undefined,
      {
        staleTime: 0,
        refetchOnMount: "always",
      },
    );

  const messages = data?.data?.messages;
  const receiver = data?.data?.receiver;

  return {
    messages,
    receiver,
    isError,
    isPending,
    isSuccess,
    isFetched,
    refetch,
  };
};
