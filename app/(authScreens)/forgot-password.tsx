// react  imports
import { useState } from "react";
//expo icons imports
import Feather from "@expo/vector-icons/Feather";
// components imports
import ScreenWrapper from "@/components/ScreenWrapper";
// expo imports
import { Link, useRouter } from "expo-router";
// react native imports
import { Image, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "@/components/CustomButton";
// ui component imports
import { Card, CardContent } from "@/components/ui/card";
// icons imports
import call from "@/assets/icons/Call.png";
import message from "@/assets/icons/Message.png";

//=========================================================

const ForgotPassword = () => {
  const [checked, setChecked] = useState<string | null>(null);
  const router = useRouter();

  return (
    <ScreenWrapper className="p-4 bg-[#fcfcfd]">
      <TouchableOpacity onPress={() => router.back()}>
        <Feather name="arrow-left" size={24} color="gray" />
      </TouchableOpacity>
      {/* ---------------------------------- */}
      <View className="flex gap-2 mb-10 mt-5">
        <Text className="text-[1.7rem] font-bold">Forgot Password</Text>
        <Text className="text-zinc-400 text-lg w-[85%] leading-[20px]">
          Select which contact details should we use to reset your password
        </Text>
      </View>
      <View className="h-[65%] gap-6">
        <TouchableOpacity onPress={() => setChecked("phone")}>
          <Card
            className={`${checked === "phone" ? "border-primary-600" : "border-zinc-300"}  py-4 rounded-2xl`}
          >
            <CardContent className="flex-row gap-5">
              <View className="bg-primary-100/70 rounded-full size-16 items-center justify-center">
                <Image source={call} className="size-10" />
              </View>
              <View className="justify-center gap-1">
                <Text className="text-zinc-400/70">Via Phone</Text>
                <Text className="font-bold text-lg">+1 234 567 8901</Text>
              </View>
            </CardContent>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setChecked("email")}>
          <Card
            className={`${checked === "email" ? "border-primary-600" : "border-zinc-300"} py-4 rounded-2xl`}
          >
            <CardContent className="flex-row gap-5">
              <View className="bg-primary-100/70 rounded-full size-16 items-center justify-center">
                <Image source={message} className="size-8" />
              </View>
              <View className="justify-center gap-1">
                <Text className="text-zinc-400/70 ">Via Email</Text>
                <Text className="font-bold text-lg">n7u9t@example.com</Text>
              </View>
            </CardContent>
          </Card>
        </TouchableOpacity>
      </View>
      {/* ---------------------------------- */}

      <CustomButton
        onButtonPress={() => router.push("/verify-account")}
        className="rounded-lg"
      >
        Continue
      </CustomButton>
    </ScreenWrapper>
  );
};

export default ForgotPassword;
