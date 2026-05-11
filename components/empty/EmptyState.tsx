import Feather from "@expo/vector-icons/Feather";
import React, { useEffect, useRef } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";

type Props = {
  title?: string;
  message?: string;
  icon?: keyof typeof Feather.glyphMap;
  buttonText?: string;
  onButtonPress?: () => void;
};

const EmptyState = ({
  title = "No data found",
  message = "There's nothing to show here at the moment.",
  icon = "inbox",
  buttonText,
  onButtonPress,
}: Props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [{ translateY: slideAnim }],
      }}
      className="flex-1 justify-center items-center px-10 py-20"
    >
      <View className="size-24 bg-zinc-100 rounded-full items-center justify-center mb-6">
        <Feather name={icon} size={50} color="#A1A1AA" />
      </View>

      <Text className="text-2xl font-bold text-zinc-900 text-center mb-2">
        {title}
      </Text>
      <Text className="text-zinc-500 text-lg text-center mb-8 leading-6">
        {message}
      </Text>

      {buttonText && onButtonPress && (
        <TouchableOpacity
          onPress={onButtonPress}
          className="bg-primary-500 px-8 py-3 rounded-xl shadow-sm shadow-primary-500"
        >
          <Text className="text-white font-bold">{buttonText}</Text>
        </TouchableOpacity>
      )}
    </Animated.View>
  );
};

export default EmptyState;
