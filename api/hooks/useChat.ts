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
