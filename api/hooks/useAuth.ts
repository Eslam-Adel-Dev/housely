import { ENDPOINTS } from "@/api/config/endpoints";
import { storage } from "@/lib/mmkvStorage";
import { useUserStore } from "@/store/userStore";
import { router } from "expo-router";
import Toast from "react-native-toast-message";
import { usePostHook } from "./useMethods";

//================================================================

//================================================================
// LOGOUT hook

export const useLogout = () => {
  storage.remove("token");
  router.push("/(authScreens)/login");
  setTimeout(() => {
    Toast.show({
      type: "info",
      text1: "Signed out 👋",
      text2: "You have been successfully signed out.",
    });
  }, 300);
};

//================================================================
// LOGIN hook

export const useLogin = () => {
  const { setAuth } = useUserStore();
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
          const token = data.token;
          const user = data?.data;

          setAuth(user, token);
          storage.set("token", token);
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

//================================================================
// REGISTER hook

export const useRegister = () => {
  const { setAuth } = useUserStore();
  const { mutate, isError, isPaused, isPending, isSuccess } = usePostHook(
    ENDPOINTS.AUTH.REGISTER,
  );

  const mutateRegister = (data: any) =>
    mutate(
      {
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password,
        profession: data.profession || "",
      },
      {
        onSuccess: () => {
          // Navigate to verification screen with email and mode
          router.push({
            pathname: "/(authScreens)/verify-account",
            params: {
              email: data.email,
              mode: "register",
            },
          });
          Toast.show({
            text1: "Welcome to Housely!",
            text2: "Account created! Please verify your email.",
          });
        },
      },
    );

  return {
    mutateRegister,
    isError,
    isPaused,
    isPending,
    isSuccess,
  };
};

//================================================================
// VERIFY hooks

export const useVerifyAccount = () => {
  const { mutate, isPending } = usePostHook(ENDPOINTS.AUTH.VERIFY);

  const mutateVerify = (data: { email: string; code: string }) =>
    mutate(data, {
      onSuccess: (res: any) => {
        Toast.show({
          type: "success",
          text1: "Verified!",
          text2: res.message,
        });
        router.replace("/(authScreens)/login");
      },
    });

  return { mutateVerify, isPending };
};

export const useResendCode = () => {
  const { mutate, isPending } = usePostHook(ENDPOINTS.AUTH.RESEND_CODE);

  const mutateResend = (
    data: { identifier: string; mode: "register" | "reset" },
    onSuccessCallback?: () => void,
  ) =>
    mutate(data, {
      onSuccess: (res: any) => {
        Toast.show({
          type: "success",
          text1: "Sent!",
          text2: res.message,
        });
        if (onSuccessCallback) onSuccessCallback();
      },
    });

  return { mutateResend, isPending };
};
