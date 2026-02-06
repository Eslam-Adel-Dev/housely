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
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);
  const router = useRouter();

  return (
    <ScreenWrapper className="p-4 bg-[#fcfcfd]">
      <TouchableOpacity onPress={() => router.back()}>
        <Feather name="arrow-left" size={24} color="gray" />
      </TouchableOpacity>
      {/* ---------------------------------- */}
      <View className="flex gap-2 mb-10 mt-5">
        <Text className="text-[1.7rem] font-bold">Welcome Back !</Text>
        <Text className="text-zinc-400 text-lg w-[85%] leading-[20px]">
          Sign in with your email and password or social media to continue
        </Text>
      </View>
      {/* ---------------------------------- */}
      <View className="mb-10">
        <View className="flex gap-2 mb-5">
          <Label nativeID="email" htmlFor="email" className="text-lg font-bold">
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
            className={`${focusedEmail ? "border-primary-600 border-[1.5px]" : "border-zinc-300"} ${styles.textInput}`}
          />
        </View>
        <View className="flex gap-2 mb-5">
          <Label
            nativeID="password"
            htmlFor="password"
            className="text-lg font-bold"
          >
            Password
          </Label>
          <Input
            id="password"
            keyboardType="default"
            textContentType="password"
            autoComplete="password"
            placeholder="Password"
            onFocus={() => setFocusedPassword(true)}
            onBlur={() => setFocusedPassword(false)}
            className={`${focusedPassword ? "border-primary-600 border-[1.5px]" : "border-zinc-300"} ${styles.textInput}`}
          />
        </View>
        <View className="flex-row items-center justify-between">
          <CheckboxWithLabel
            label="Remember Me"
            classNameLabel="text-md font-semibold"
          />
          <Link href="/forgot-password" className="text-primary-600">
            Forgot Password ?
          </Link>
        </View>
      </View>
      {/* ---------------------------------- */}

      <CustomButton
        onButtonPress={() => router.push("/")}
        className="rounded-lg"
      >
        Sign In
      </CustomButton>
      {/* ---------------------------------- */}
      <View className="flex-row items-center justify-between gap-2 mt-5 mb-7">
        <View className="h-[1px] bg-zinc-200 flex-1" />
        <Text>OR</Text>
        <View className="h-[1px] bg-zinc-200 flex-1" />
      </View>

      {/* ---------------------------------- */}
      <View className="flex-row items-center justify-center mb-7 gap-7">
        <TouchableOpacity className="bg-white rounded-full p-2">
          <Image source={google_logo} className="size-10" />
        </TouchableOpacity>

        <TouchableOpacity className="bg-white rounded-full p-2">
          <Image source={facebook_logo} className="size-10" />
        </TouchableOpacity>
      </View>
      {/* ---------------------------------- */}
      <View>
        <Text className="text-zinc-400 text-center">
          Don't have an account ?{" "}
          <Link href="/register" className="text-primary-600">
            Sign Up
          </Link>
        </Text>
      </View>
    </ScreenWrapper>
  );
};

export default Login;
