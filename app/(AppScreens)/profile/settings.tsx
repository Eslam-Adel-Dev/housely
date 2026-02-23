// icons imports
import Camera from "@/assets/icons/Camera.svg";
import Feather from "@expo/vector-icons/Feather";
// components imports
import CustomButton from "@/components/CustomButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// expo imports
import { useRouter } from "expo-router";
// react imports
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
// images imports
import profilePic from "@/assets/images/profilePic.jpg";
// date package imports

//=========================================================

const styles = {
  textInput: "h-16 rounded-2xl bg-white text-lg px-5",
};

//=========================================================

const Settings = () => {
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedUsername, setFocusedUsername] = useState(false);
  const [focusedDate, setFocusedDate] = useState(false);
  const router = useRouter();

  return (
    <ScreenWrapper className="p-4 bg-[#fcfcfd]">
      <ScrollView className="h-full">
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="arrow-left" size={24} color="gray" />
        </TouchableOpacity>
        {/* ---------------------------------- */}
        <View className="py-12 w-full items-center justify-center gap-4">
          <View>
            <View className="absolute bottom-0 right-0 h-12 w-12 rounded-full bg-primary-600 items-center justify-center z-10">
              <Camera className="w-[60%] h-[60%] " />
            </View>
            <Image
              className="rounded-full"
              source={profilePic}
              style={{ width: 150, height: 150 }}
              resizeMode="cover"
            />
          </View>
          <View className="items-center justify-center gap-1">
            <Text className="text-lg font-bold">Brooklyn Simmons</Text>
            <Text className="text-zinc-400">BrooklynSimmons@gmail.com</Text>
          </View>
        </View>
        {/* ---------------------------------- */}
        <View className="mb-10">
          <View className="flex gap-2 mb-5">
            <Label
              nativeID="username"
              htmlFor="username"
              className="text-lg font-bold"
            >
              Username
            </Label>
            <Input
              id="username"
              keyboardType="default"
              textContentType="name"
              autoComplete="name"
              placeholder="Username"
              onFocus={() => setFocusedUsername(true)}
              onBlur={() => setFocusedUsername(false)}
              className={`${focusedUsername ? "border-primary-600 border-[1.5px]" : "border-zinc-300"} ${styles.textInput} placeholder:text-zinc-400 text-zinc-600`}
            />
          </View>
          <View className="flex gap-2 mb-5">
            <Label
              nativeID="email"
              htmlFor="email"
              className="text-lg font-bold"
            >
              Email
            </Label>
            <Input
              id="email"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoComplete="email"
              placeholder="Email"
              onFocus={() => setFocusedEmail(true)}
              onBlur={() => setFocusedEmail(false)}
              className={`${focusedEmail ? "border-primary-600 border-[1.5px]" : "border-zinc-300"} ${styles.textInput} placeholder:text-zinc-400 text-zinc-600`}
            />
          </View>
          <View className="flex gap-2 mb-5">
            <Label nativeID="date" htmlFor="date" className="text-lg font-bold">
              Date
            </Label>
            <Input
              id="date"
              keyboardType="default"
              textContentType="dateTime"
              autoComplete="cc-exp-day"
              placeholder="2023-10-10"
              onFocus={() => setFocusedDate(true)}
              onBlur={() => setFocusedDate(false)}
              className={`${focusedDate ? "border-primary-600 border-[1.5px]" : "border-zinc-300"} ${styles.textInput} placeholder:text-zinc-400 text-zinc-600`}
            />
          </View>
        </View>
        {/* ---------------------------------- */}

        <CustomButton
          onButtonPress={() => router.push("/")}
          className="rounded-lg"
          textClassName="text-white"
        >
          Save Changes
        </CustomButton>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Settings;
