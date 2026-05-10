import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInputProps } from "react-native";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Feather from "@expo/vector-icons/Feather";
import { useTogglePassword } from "@/hooks/useTogglePassword";

interface CustomInputProps extends TextInputProps {
  label: string;
  error?: string;
  isPassword?: boolean;
}

const CustomInput = ({
  label,
  error,
  isPassword,
  ...props
}: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const { isPasswordVisible, toggleVisibility } = useTogglePassword();

  const borderColorClass = isFocused
    ? "border-primary-600 border-[1.5px]"
    : error
    ? "border-red-500 border-[1.5px]"
    : "border-zinc-300 border-[1.5px]";

  return (
    <View className="flex gap-2 mb-5">
      <Label className="text-lg font-bold">
        {label}
      </Label>
      <View className="relative">
        <Input
          {...props}
          secureTextEntry={isPassword && !isPasswordVisible}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          className={`h-16 rounded-2xl bg-white text-lg px-5 placeholder:text-zinc-400 text-zinc-600 ${borderColorClass} ${props.className || ""}`}
        />
        {isPassword && (
          <TouchableOpacity
            onPress={toggleVisibility}
            className="absolute right-4 top-4"
            style={{ height: 32, justifyContent: 'center' }}
          >
            <Feather
              name={isPasswordVisible ? "eye" : "eye-off"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text className="text-red-500 text-sm ml-1">
          {error}
        </Text>
      )}
    </View>
  );
};

export default CustomInput;
