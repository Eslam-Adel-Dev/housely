// react native imports
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

// expo icons imports
import Feather from "@expo/vector-icons/Feather";
// components imports
import CustomButton from "@/components/CustomButton";
import ScreenWrapper from "@/components/ScreenWrapper";
// expo imports
import { useLocalSearchParams, useRouter } from "expo-router";
// react otp import
import { OtpInput } from "react-native-otp-entry";
// types imports
import { verifyAccountInput } from "@/types/type";
// react-hook-form imports
import { Controller, useForm } from "react-hook-form";
// hooks imports
import { useResendTimer } from "@/hooks/useResendTimer";
// yup schemas

//=========================================================

const VerifyAccount = () => {
  const { timer, canResend, resetTimer } = useResendTimer(60);
  const { height } = useWindowDimensions();
  const router = useRouter();

  const { email, mode } = useLocalSearchParams<{
    email: string;
    mode: "register" | "reset";
  }>();

  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      otp: "",
    },
  });

  // -----------------------

  const handleVerify = async (data: verifyAccountInput) => {
    try {
      console.log(data);
      router.replace("/(authScreens)/reset-password");
    } catch (error) {
      console.error(error);
    }
  };

  const handleResend = () => {
    if (!canResend) return;

    resetTimer();
  };

  // -----------------------

  return (
    <ScreenWrapper className="p-4 bg-[#fcfcfd]">
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,
            { minHeight: height * 0.85 },
          ]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <Feather name="arrow-left" size={24} color="gray" />
          </TouchableOpacity>

          <View className="flex gap-2 mb-10 mt-5">
            <Text className="text-[1.7rem] font-bold">
              {mode === "register" ? "Verify Account" : "Reset Code"}
            </Text>
            <Text className="text-zinc-400 text-lg w-[85%] leading-[20px]">
              Please enter the 6-digit code sent to{" "}
              <Text className="text-primary-600 font-semibold">{email}</Text>
            </Text>
          </View>

          {/* OTP Section */}
          <View style={styles.otpSection}>
            <Controller
              name="otp"
              control={control}
              render={({ field: { onChange, value } }) => (
                <OtpInput
                  numberOfDigits={6}
                  focusColor="#7F56D9"
                  placeholder="******"
                  blurOnFilled={true}
                  onTextChange={onChange}
                  onFilled={(text) => handleVerify({ otp: text })}
                  theme={{
                    pinCodeContainerStyle: styles.pinCodeContainerStyle,
                    pinCodeTextStyle: styles.pinCodeTextStyle,
                  }}
                />
              )}
            />

            {/* Resend code */}
            <View className="items-center justify-center gap-2 mt-4">
              <Text className="text-zinc-400 text-lg text-center">
                Didn&apos;t receive a code?
              </Text>
              <TouchableOpacity onPress={handleResend} disabled={!canResend}>
                <Text
                  className={`text-lg font-bold ${
                    canResend ? "text-primary-600" : "text-zinc-400"
                  }`}
                >
                  {canResend ? "Resend Code" : `Resend in ${timer}s`}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="mt-auto">
            <CustomButton
              onButtonPress={handleSubmit(handleVerify)}
              textClassName="text-white"
              className="rounded-lg"
            >
              Verify
            </CustomButton>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

export default VerifyAccount;

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 16,
  },
  otpSection: {
    flex: 1,
    gap: 32,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  pinCodeContainerStyle: {
    width: 50,
    height: 60,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    backgroundColor: "white",
  },
  pinCodeTextStyle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1F2937",
  },
});
