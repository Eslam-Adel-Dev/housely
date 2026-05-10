import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import google_logo from "@/assets/images/google-logo.png";
import facebook_logo from "@/assets/images/facebook-logo.png";

interface SocialAuthProps {
  onGooglePress?: () => void;
  onFacebookPress?: () => void;
}

const SocialAuth = ({ onGooglePress, onFacebookPress }: SocialAuthProps) => {
  return (
    <>
      <View className="flex-row items-center justify-between gap-2 mt-5 mb-7">
        <View className="h-[1px] bg-zinc-200 flex-1" />
        <Text className="text-zinc-500 font-medium">OR</Text>
        <View className="h-[1px] bg-zinc-200 flex-1" />
      </View>

      <View className="flex-row items-center justify-center mb-7 gap-7">
        <TouchableOpacity
          onPress={onGooglePress}
          className="bg-white rounded-full p-2 shadow-sm border border-zinc-100"
        >
          <Image source={google_logo} className="size-10" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onFacebookPress}
          className="bg-white rounded-full p-2 shadow-sm border border-zinc-100"
        >
          <Image source={facebook_logo} className="size-10" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SocialAuth;
