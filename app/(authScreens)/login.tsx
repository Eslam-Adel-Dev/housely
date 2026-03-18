// react  imports
import { useState } from "react";
// components imports
import CheckboxWithLabel from "@/components/CheckboxWithLabel";
import CustomButton from "@/components/CustomButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// expo imports
import { Link, useRouter } from "expo-router";
// react native imports
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
//images imports
import facebook_logo from "@/assets/images/facebook-logo.png";
import google_logo from "@/assets/images/google-logo.png";
// context imports
import { useUserContext } from "@/context/userContext";
// types import
import { loginInput } from "@/types/type";
// react hook form
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
// yup schemas
import { loginSchema } from "@/lib/yupSchemas/loginSchema";
// toast imports
import Toast from "react-native-toast-message";

//=========================================================

const styles = {
  textInput:
    "h-16 rounded-2xl bg-white text-lg px-5 placeholder:text-zinc-400 text-zinc-600",
};

//=========================================================

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<loginInput>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });
  const [focusedPassword, setFocusedPassword] = useState(false);
  const [focusedEmail, setFocusedEmail] = useState(false);
  const { login } = useUserContext();
  const router = useRouter();

  // -----------------------

  const handleLogin = async (data: loginInput) => {
    try {
      console.log(data);
      login();
      Toast.show({
        type: "success",
        text1: "Welcome back! 👋",
        text2: "You have successfully signed in.",
      });
      router.replace("/");
    } catch (error) {
      console.error(error);
    }
  };

  // -----------------------

  return (
    <ScreenWrapper className="p-4 pt-10 bg-[#fcfcfd]">
      <ScrollView>
        {/* ---------------------------------- */}
        <View className="flex gap-2 mb-10 mt-5">
          <Text className="text-[1.7rem] font-bold">Welcome Back !</Text>
          <Text className="text-zinc-400 text-lg w-[85%] leading-[20px]">
            Sign in with your email and password or social media to continue
          </Text>
        </View>
        {/* ---------------------------------- */}
        <View className="mb-10">
          {/* Email Field */}
          <View className="flex gap-2 mb-5">
            <Label
              nativeID="email"
              htmlFor="email"
              className="text-lg font-bold"
            >
              Email
            </Label>
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Enter your email"
                  value={value}
                  onChangeText={onChange}
                  onFocus={() => setFocusedEmail(true)}
                  onBlur={() => {
                    setFocusedEmail(false);
                    onBlur();
                  }}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  className={`${focusedEmail ? "border-primary-600 border-[1.5px]" : errors.email ? "border-red-500 border-[1.5px]" : "border-zinc-300"} ${styles.textInput}`}
                />
              )}
            />
            {errors.email && (
              <Text className="text-red-500 text-sm ml-1">
                {errors.email.message}
              </Text>
            )}
          </View>

          {/* Password Field */}
          <View className="flex gap-2 mb-5">
            <Label
              nativeID="password"
              htmlFor="password"
              className="text-lg font-bold"
            >
              Password
            </Label>
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Enter your password"
                  value={value}
                  onChangeText={onChange}
                  onFocus={() => setFocusedPassword(true)}
                  onBlur={() => {
                    setFocusedPassword(false);
                    onBlur();
                  }}
                  secureTextEntry
                  className={`${focusedPassword ? "border-primary-600 border-[1.5px]" : errors.password ? "border-red-500 border-[1.5px]" : "border-zinc-300"} ${styles.textInput} `}
                />
              )}
            />
            {errors.password && (
              <Text className="text-red-500 text-sm ml-1">
                {errors.password.message}
              </Text>
            )}
          </View>

          {/* Remember Me + Forgot Password */}
          <View className="flex-row items-center justify-between mb-8">
            <Controller
              name="rememberMe"
              control={control}
              render={({ field: { onChange, value } }) => (
                <CheckboxWithLabel
                  label="Remember Me"
                  classNameLabel="text-md font-semibold"
                  checked={value}
                  onCheckedChange={onChange}
                />
              )}
            />
            <Link href="/forgot-password" className="text-primary-600">
              Forgot Password ?
            </Link>
          </View>

          {/* Submit */}
          <CustomButton
            onButtonPress={handleSubmit(handleLogin) as () => void}
            textClassName="text-white"
            className="rounded-lg"
          >
            Sign In
          </CustomButton>
        </View>

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
            Dont have an account ?{" "}
            <Link href="/register" className="text-primary-600">
              Sign Up
            </Link>
          </Text>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Login;
