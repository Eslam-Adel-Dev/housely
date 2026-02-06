// react  imports
import { useState } from "react";
//expo icons imports
import Feather from "@expo/vector-icons/Feather";
// components imports
import ScreenWrapper from "@/components/ScreenWrapper";
// expo imports
import { useRouter } from "expo-router";
// react native imports
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "@/components/CustomButton";
// react otp import
import { OtpInput } from "react-native-otp-entry";

//=========================================================

const VerifyAccount = () => {
  const [checked, setChecked] = useState<string | null>(null);
  const router = useRouter();

  return (
    <ScreenWrapper className="p-4 bg-[#fcfcfd]">
      <TouchableOpacity onPress={() => router.back()}>
        <Feather name="arrow-left" size={24} color="gray" />
      </TouchableOpacity>
      {/* ---------------------------------- */}
      <View className="flex gap-2 mb-10 mt-5">
        <Text className="text-[1.7rem] font-bold">Verify your Email</Text>
        <Text className="text-zinc-400 text-lg w-[85%] leading-[20px]">
          Please enter 6 digit verification that have been sent to your email
          address
        </Text>
      </View>
      <View className="h-[65%] gap-6 items-center justify-center">
        <OtpInput
          numberOfDigits={5}
          focusColor="#7F56D9"
          placeholder="******"
          blurOnFilled={true}
          onTextChange={(text) => console.log(text)}
          theme={{
            pinCodeContainerStyle: styles.pinCodeContainerStyle,
          }}
        />
        <View className="items-center justify-center gap-1">
          <Text className="text-zinc-400 text-lg w-[85%] leading-[20px] text-center">
            Didn't receive a code?{" "}
          </Text>
          <Text className="text-[#F97066]">Resend Code</Text>
        </View>
      </View>
      {/* ---------------------------------- */}

      <CustomButton
        onButtonPress={() => router.push("/change-password")}
        className="rounded-lg"
      >
        Verify
      </CustomButton>
    </ScreenWrapper>
  );
};

export default VerifyAccount;

const styles = StyleSheet.create({
  pinCodeContainerStyle: {
    padding: 5,
    boxSizing: "content-box",
  },
});
