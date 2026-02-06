// react  imports
import { useState } from "react";
//expo icons imports
import Feather from "@expo/vector-icons/Feather";
// components imports
import ScreenWrapper from "@/components/ScreenWrapper";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// expo imports
import { Link, useRouter } from "expo-router";
// react native imports
import { Image, Text, TouchableOpacity, View } from "react-native";
import CheckboxWithLabel from "@/components/CheckboxWithLabel";
import CustomButton from "@/components/CustomButton";
//images imports
import facebook_logo from "@/assets/images/facebook-logo.png";
import google_logo from "@/assets/images/google-logo.png";

//=========================================================

const styles = {
  textInput: "h-16 rounded-2xl bg-white text-lg px-5",
};

//=========================================================

const Login = () => {
  const [newPassword, setNewPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const router = useRouter();

  return (
    <ScreenWrapper className="p-4 bg-[#fcfcfd]">
      <TouchableOpacity onPress={() => router.back()}>
        <Feather name="arrow-left" size={24} color="gray" />
      </TouchableOpacity>
      {/* ---------------------------------- */}
      <View className="flex gap-2 mb-10 mt-5">
        <Text className="text-[1.7rem] font-bold">Create New Password</Text>
        <Text className="text-zinc-400 text-lg w-[85%] leading-[20px]">
          Please enter a new password to change
        </Text>
      </View>
      {/* ---------------------------------- */}
      <View className="mb-10 h-[65%]">
        <View className="flex gap-2 mb-5">
          <Label
            nativeID="password"
            htmlFor="password"
            className="text-lg font-bold"
          >
            New Password
          </Label>
          <Input
            id="password"
            keyboardType="default"
            textContentType="password"
            autoComplete="password"
            placeholder="Password"
            onFocus={() => setNewPassword(true)}
            onBlur={() => setNewPassword(false)}
            className={`${newPassword ? "border-primary-600 border-[1.5px]" : "border-zinc-300"} ${styles.textInput}`}
          />
        </View>
        <View className="flex gap-2 mb-5">
          <Label
            nativeID="password"
            htmlFor="password"
            className="text-lg font-bold"
          >
            Confirm Password
          </Label>
          <Input
            id="password"
            keyboardType="default"
            textContentType="password"
            autoComplete="password"
            placeholder="Password"
            onFocus={() => setConfirmPassword(true)}
            onBlur={() => setConfirmPassword(false)}
            className={`${confirmPassword ? "border-primary-600 border-[1.5px]" : "border-zinc-300"} ${styles.textInput}`}
          />
        </View>
      </View>
      {/* ---------------------------------- */}

      <CustomButton
        onButtonPress={() => router.push("/success-screen")}
        className="rounded-lg"
      >
        Change Password
      </CustomButton>
    </ScreenWrapper>
  );
};

export default Login;
