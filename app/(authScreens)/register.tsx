// react imports
import { useState } from "react";
// expo icons imports
import Feather from "@expo/vector-icons/Feather";
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
// images imports
import facebook_logo from "@/assets/images/facebook-logo.png";
import google_logo from "@/assets/images/google-logo.png";
// types import
import { registerInput } from "@/types/type";
// react hook form
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
// yup schemas
import { registerSchema } from "@/lib/yupSchemas/registerSchema";

//=========================================================

const styles = {
  textInput: "h-16 rounded-2xl bg-white text-lg px-5 text-zinc-600",
};

//=========================================================

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<registerInput>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      agreeToTerms: false,
    },
  });
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);
  const [focusedUsername, setFocusedUsername] = useState(false);
  const router = useRouter();

  // -----------------------

  const handleRegister = async (data: registerInput) => {
    try {
      console.log(data);
      // await register(data);
      // router.replace("/");
    } catch (error) {
      console.error(error);
    }
  };

  // -----------------------

  return (
    <ScreenWrapper className="p-4 bg-[#fcfcfd]">
      <ScrollView>
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="arrow-left" size={24} color="gray" />
        </TouchableOpacity>
        {/* ---------------------------------- */}
        <View className="flex gap-2 mb-10 mt-5">
          <Text className="text-[1.7rem] font-bold">Register Account</Text>
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
                  id="email"
                  placeholder="Email"
                  value={value}
                  onChangeText={onChange}
                  onFocus={() => setFocusedEmail(true)}
                  onBlur={() => {
                    setFocusedEmail(false);
                    onBlur();
                  }}
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  autoComplete="email"
                  autoCapitalize="none"
                  className={`${focusedEmail ? "border-primary-600 border-[1.5px]" : errors.email ? "border-red-500 border-[1.5px]" : "border-zinc-300"} ${styles.textInput} placeholder:text-zinc-400`}
                />
              )}
            />
            {errors.email && (
              <Text className="text-red-500 text-sm ml-1">
                {errors.email.message}
              </Text>
            )}
          </View>

          {/* Username Field */}
          <View className="flex gap-2 mb-5">
            <Label
              nativeID="username"
              htmlFor="username"
              className="text-lg font-bold"
            >
              Username
            </Label>
            <Controller
              name="username"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  id="username"
                  placeholder="Username"
                  value={value}
                  onChangeText={onChange}
                  onFocus={() => setFocusedUsername(true)}
                  onBlur={() => {
                    setFocusedUsername(false);
                    onBlur();
                  }}
                  keyboardType="default"
                  textContentType="username"
                  autoComplete="username"
                  autoCapitalize="none"
                  className={`${focusedUsername ? "border-primary-600 border-[1.5px]" : errors.username ? "border-red-500 border-[1.5px]" : "border-zinc-300"} ${styles.textInput} placeholder:text-zinc-400`}
                />
              )}
            />
            {errors.username && (
              <Text className="text-red-500 text-sm ml-1">
                {errors.username.message}
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
                  id="password"
                  placeholder="Password"
                  value={value}
                  onChangeText={onChange}
                  onFocus={() => setFocusedPassword(true)}
                  onBlur={() => {
                    setFocusedPassword(false);
                    onBlur();
                  }}
                  secureTextEntry
                  textContentType="password"
                  autoComplete="password"
                  className={`${focusedPassword ? "border-primary-600 border-[1.5px]" : errors.password ? "border-red-500 border-[1.5px]" : "border-zinc-300"} ${styles.textInput} placeholder:text-zinc-400`}
                />
              )}
            />
            {errors.password && (
              <Text className="text-red-500 text-sm ml-1">
                {errors.password.message}
              </Text>
            )}
          </View>

          {/* Terms Checkbox */}
          <View className="mb-8">
            <Controller
              name="agreeToTerms"
              control={control}
              render={({ field: { onChange, value } }) => (
                <CheckboxWithLabel
                  label="Agree with terms and privacy"
                  classNameLabel="text-md font-semibold"
                  checked={value}
                  onCheckedChange={onChange}
                />
              )}
            />
            {errors.agreeToTerms && (
              <Text className="text-red-500 text-sm ml-1 mt-1">
                {errors.agreeToTerms.message}
              </Text>
            )}
          </View>
        </View>
        {/* ---------------------------------- */}

        <CustomButton
          onButtonPress={handleSubmit(handleRegister) as () => void}
          textClassName="text-white"
          className="rounded-lg"
        >
          Sign Up
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
            Already have an account ?{" "}
            <Link href="/login" className="text-primary-600">
              Sign In
            </Link>
          </Text>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Register;
