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
// react imports
// expo icons imports
import Feather from "@expo/vector-icons/Feather";
// components imports
import CustomButton from "@/components/CustomButton";
import ScreenWrapper from "@/components/ScreenWrapper";
// expo imports
import { useRouter } from "expo-router";
// react otp import
import { OtpInput } from "react-native-otp-entry";
// types imports
import { verifyAccountInput } from "@/types/type";
// react-hook-form imports
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
// yup schemas
import { verifyAccountSchema } from "@/lib/yupSchemas/verifyAccountSchema";

//=========================================================

const VerifyAccount = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<verifyAccountInput>({
    resolver: yupResolver(verifyAccountSchema),
    defaultValues: {
      otp: "",
    },
  });
  const { height } = useWindowDimensions();
  const router = useRouter();

  // -----------------------

  const handleVerifyAccount = async (data: verifyAccountInput) => {
    try {
      console.log(data);
      router.replace("/(authScreens)/reset-password");
    } catch (error) {
      console.error(error);
    }
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
          {/* ---------------------------------- */}
          <View className="flex gap-2 mb-10 mt-5">
            <Text className="text-[1.7rem] font-bold">Verify your Email</Text>
            <Text className="text-zinc-400 text-lg w-[85%] leading-[20px]">
              Please enter 6 digit verification that have been sent to your
              email address
            </Text>
          </View>

          {/* otp input */}

          <View style={styles.otpSection}>
            <Controller
              name="otp"
              control={control}
              render={({ field: { onChange } }) => (
                <OtpInput
                  numberOfDigits={5}
                  focusColor="#7F56D9"
                  placeholder="******"
                  blurOnFilled={true}
                  onTextChange={(text) => onChange(text)}
                  onFilled={(text) => handleVerifyAccount({ otp: text })}
                  theme={{
                    pinCodeContainerStyle: styles.pinCodeContainerStyle,
                  }}
                />
              )}
            />

            {/* resend code */}
            <View className="items-center justify-center gap-1">
              <Text className="text-zinc-400 text-lg w-[85%] leading-[20px] text-center">
                Didn&apos;t receive a code?{" "}
              </Text>
              <Text className="text-[#F97066]">Resend Code</Text>

              {/* Error message */}
              {errors.otp && (
                <Text className="text-red-500">{errors.otp.message}</Text>
              )}
            </View>
          </View>
          {/* ---------------------------------- */}

          <CustomButton
            onButtonPress={handleSubmit(handleVerifyAccount)}
            textClassName="text-white"
            className="rounded-lg"
          >
            Verify
          </CustomButton>
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
    justifyContent: "space-between",
    paddingBottom: 16,
  },
  otpSection: {
    flex: 1,
    gap: 24,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    backgroundColor: "white",
  },
  pinCodeContainerStyle: {
    padding: 5,
    boxSizing: "content-box",
  },
});
