import { ENDPOINTS } from "@/api/config/endpoints";
import { storage } from "@/lib/mmkvStorage";
import { router } from "expo-router";
import Toast from "react-native-toast-message";
import { usePostHook } from "./useMethods";

//================================================================
// LOGIN hook

export const useLogin = () => {
  const { mutate, isError, isPaused, isPending, isSuccess } = usePostHook(
    ENDPOINTS.AUTH.LOGIN,
  );

  const mutateLogin = (data: any) =>
    mutate(
      {
        identifier: data.email,
        password: data.password,
      },
      {
        onSuccess: (data) => {
          const dataString = JSON.stringify(data);
          storage.set("userCredentials", dataString);
          router.push("/(AppScreens)/(tabs)");
          Toast.show({
            text1: "WELCOME BACK",
            text2: "Successfully signed in",
          });
        },
      },
    );

  return {
    mutateLogin,
    isError,
    isPaused,
    isPending,
    isSuccess,
  };
};
