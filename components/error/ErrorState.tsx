import { View, Text, TouchableOpacity, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import Feather from "@expo/vector-icons/Feather";
import ScreenWrapper from "@/components/ScreenWrapper";
import { useRouter } from "expo-router";

type Props = {
  title?: string;
  message?: string;
  onRetry?: () => void;
  onBack?: () => void;
  icon?: keyof typeof Feather.glyphMap;
  fullScreen?: boolean;
};

const ErrorState = ({
  title = "Oops! Something went wrong",
  message = "An unexpected error occurred. Please check your connection and try again.",
  onRetry,
  onBack,
  icon = "alert-triangle",
  fullScreen = true,
}: Props) => {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Fade in entry
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    // Subtle heartbeat pulse on the icon
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [fadeAnim, pulseAnim]);

  const Content = (
    <Animated.View
      style={{ opacity: fadeAnim }}
      className={`flex-1 justify-center items-center px-6 ${
        !fullScreen ? "py-10" : ""
      }`}
    >
      <View className="mb-8 items-center justify-center">
        <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
          <View className="size-24 rounded-full bg-red-100 items-center justify-center border-[8px] border-red-50">
            <Feather name={icon} size={40} color="#EF4444" />
          </View>
        </Animated.View>
      </View>

      <Text className="text-2xl font-bold text-zinc-900 text-center mb-3">
        {title}
      </Text>
      <Text className="text-zinc-500 text-center mb-10 text-base leading-6 px-4">
        {message}
      </Text>

      <View className="w-full gap-4">
        {onRetry && (
          <TouchableOpacity
            onPress={onRetry}
            className="w-full bg-primary-500 py-4 rounded-xl items-center justify-center flex-row gap-2 shadow-sm shadow-primary-500"
          >
            <Feather name="refresh-cw" size={20} color="white" />
            <Text className="text-white font-bold text-lg">Try Again</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          onPress={onBack ? onBack : () => router.back()}
          className="w-full bg-zinc-100 py-4 rounded-xl items-center justify-center border border-zinc-200"
        >
          <Text className="text-zinc-700 font-bold text-lg">Go Back</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );

  if (fullScreen) {
    return <ScreenWrapper>{Content}</ScreenWrapper>;
  }

  return Content;
};

export default ErrorState;
