import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { Controller, Control } from "react-hook-form";

interface OTPSectionProps {
  control: Control<any>;
  onVerify: (data: { otp: string }) => void;
  onResend: () => void;
  canResend: boolean;
  isResending: boolean;
  timer: number;
}

const OTPSection = ({
  control,
  onVerify,
  onResend,
  canResend,
  isResending,
  timer,
}: OTPSectionProps) => {
  return (
    <View style={styles.otpSection}>
      <Controller
        name="otp"
        control={control}
        render={({ field: { onChange } }) => (
          <OtpInput
            numberOfDigits={6}
            focusColor="#7F56D9"
            placeholder="******"
            blurOnFilled={true}
            onTextChange={onChange}
            onFilled={(text) => onVerify({ otp: text })}
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
        <TouchableOpacity onPress={onResend} disabled={!canResend}>
          <Text
            className={`text-lg font-bold ${
              canResend ? "text-primary-600" : "text-zinc-400"
            }`}
          >
            {isResending
              ? "Sending..."
              : canResend
                ? "Resend Code"
                : `Resend in ${timer}s`}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OTPSection;

const styles = StyleSheet.create({
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
