import { useLocalSearchParams, useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { useResendCode, useVerifyAccount } from "@/api/hooks/useAuth";
import { useResendTimer } from "@/hooks/useResendTimer";
import { verifyAccountInput } from "@/types/type";

export const useVerifyAccountSession = () => {
  const router = useRouter();
  const { timer, canResend, resetTimer } = useResendTimer(60);
  const { mutateResend, isPending: isResending } = useResendCode();
  const { mutateVerify, isPending: isVerifying } = useVerifyAccount();
  const { email, mode } = useLocalSearchParams<{
    email: string;
    mode: "register" | "reset";
  }>();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      otp: "",
    },
  });

  const handleVerify = async (data: verifyAccountInput) => {
    try {
      mutateVerify({
        email: email!,
        code: data.otp,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleResend = () => {
    if (!canResend) return;

    mutateResend(
      {
        identifier: email!,
        mode: mode === "register" ? "register" : "reset",
      },
      () => {
        resetTimer();
      },
    );
  };

  return {
    email,
    mode,
    timer,
    canResend,
    isResending,
    isVerifying,
    control,
    handleSubmit,
    handleVerify,
    handleResend,
    goBack: () => router.back(),
  };
};
