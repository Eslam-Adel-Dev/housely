// react  imports
import { useState } from "react";
//expo icons imports
import Feather from "@expo/vector-icons/Feather";
// components imports
import CustomButton from "@/components/CustomButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// expo imports
import { useRouter } from "expo-router";
// react native imports
import { Text, TouchableOpacity, View } from "react-native";
// react hook form
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
// yup schemas
import {
  ResetPasswordFormData,
  resetPasswordSchema,
} from "@/lib/yupSchemas/resetPasswordSchema";

//=========================================================

const styles = {
  textInput: "h-16 rounded-2xl bg-white text-lg px-5",
};

//=========================================================

const ResetPassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: yupResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const [focusedNewPassword, setFocusedNewPassword] = useState(false);
  const [focusedConfirmPassword, setFocusedConfirmPassword] = useState(false);
  const router = useRouter();

  // -----------------------

  const handleResetPassword = async (data: ResetPasswordFormData) => {
    try {
      console.log(data);
      router.push("/success-screen");
    } catch (error) {
      console.error(error);
    }
  };

  // -----------------------

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
        {/* New Password Field */}
        <View className="flex gap-2 mb-5">
          <Label
            nativeID="newPassword"
            htmlFor="newPassword"
            className="text-lg font-bold"
          >
            New Password
          </Label>
          <Controller
            name="newPassword"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                id="newPassword"
                keyboardType="default"
                textContentType="password"
                autoComplete="password"
                secureTextEntry
                placeholder="New Password"
                value={value}
                onChangeText={onChange}
                onFocus={() => setFocusedNewPassword(true)}
                onBlur={() => {
                  setFocusedNewPassword(false);
                  onBlur();
                }}
                className={`${
                  focusedNewPassword
                    ? "border-primary-600 border-[1.5px]"
                    : errors.newPassword
                      ? "border-red-500 border-[1.5px]"
                      : "border-zinc-300"
                } ${styles.textInput} placeholder:text-zinc-400 text-zinc-600`}
              />
            )}
          />
          {errors.newPassword && (
            <Text className="text-red-500 text-sm ml-1">
              {errors.newPassword.message}
            </Text>
          )}
        </View>

        {/* Confirm Password Field */}
        <View className="flex gap-2 mb-5">
          <Label
            nativeID="confirmPassword"
            htmlFor="confirmPassword"
            className="text-lg font-bold"
          >
            Confirm Password
          </Label>
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                id="confirmPassword"
                keyboardType="default"
                textContentType="password"
                autoComplete="password"
                secureTextEntry
                placeholder="Confirm Password"
                value={value}
                onChangeText={onChange}
                onFocus={() => setFocusedConfirmPassword(true)}
                onBlur={() => {
                  setFocusedConfirmPassword(false);
                  onBlur();
                }}
                className={`${
                  focusedConfirmPassword
                    ? "border-primary-600 border-[1.5px]"
                    : errors.confirmPassword
                      ? "border-red-500 border-[1.5px]"
                      : "border-zinc-300"
                } ${styles.textInput} placeholder:text-zinc-400 text-zinc-600`}
              />
            )}
          />
          {errors.confirmPassword && (
            <Text className="text-red-500 text-sm ml-1">
              {errors.confirmPassword.message}
            </Text>
          )}
        </View>
      </View>
      {/* ---------------------------------- */}

      <CustomButton
        onButtonPress={handleSubmit(handleResetPassword) as () => void}
        textClassName="text-white"
        className="rounded-lg"
      >
        Change Password
      </CustomButton>
    </ScreenWrapper>
  );
};

export default ResetPassword;
