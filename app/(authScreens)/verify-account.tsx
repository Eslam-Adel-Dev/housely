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
import OTPSection from "@/components/auth/OTPSection";
// hooks imports
import { useVerifyAccountSession } from "@/hooks/auth/useVerifyAccountSession";

//=========================================================

const VerifyAccount = () => {
  const { height } = useWindowDimensions();
  const {
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
    goBack,
  } = useVerifyAccountSession();

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
          <TouchableOpacity onPress={goBack}>
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
          <OTPSection
            control={control}
            onVerify={handleVerify}
            onResend={handleResend}
            canResend={canResend}
            isResending={isResending}
            timer={timer}
          />

          <View className="mt-auto">
            <CustomButton
              onButtonPress={handleSubmit(handleVerify)}
              textClassName="text-white"
              className="rounded-lg"
              loading={isVerifying}
              disabled={isVerifying}
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
});

