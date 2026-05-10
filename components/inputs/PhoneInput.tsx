import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInputProps } from "react-native";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Feather from "@expo/vector-icons/Feather";
import { CountryItem } from "@/components/CountryPickerModal";

interface PhoneInputProps extends TextInputProps {
  label: string;
  error?: string;
  selectedCountry: CountryItem;
  onPickerPress: () => void;
}

const PhoneInput = ({
  label,
  error,
  selectedCountry,
  onPickerPress,
  ...props
}: PhoneInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

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
      <View className="flex-row items-center gap-2">
        {/* Country Picker Trigger */}
        <TouchableOpacity
          onPress={onPickerPress}
          className={`flex-row items-center justify-center h-16 px-4 rounded-2xl bg-white border-[1.5px] ${isFocused ? "border-primary-600" : error ? "border-red-500" : "border-zinc-300"}`}
        >
          <Text className="text-2xl">{selectedCountry.flag}</Text>
          <Text className="text-zinc-600 text-lg ml-2">
            +{selectedCountry.dial_code}
          </Text>
          <Feather
            name="chevron-down"
            size={16}
            color="#D1D5DB"
            style={{ marginLeft: 4 }}
          />
        </TouchableOpacity>

        {/* Phone Input */}
        <Input
          {...props}
          keyboardType="phone-pad"
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          className={`flex-1 h-16 rounded-2xl bg-white text-lg px-5 placeholder:text-zinc-400 text-zinc-600 ${borderColorClass} ${props.className || ""}`}
        />
      </View>
      {error && (
        <Text className="text-red-500 text-sm ml-1 mt-1">
          {error}
        </Text>
      )}
    </View>
  );
};

export default PhoneInput;
