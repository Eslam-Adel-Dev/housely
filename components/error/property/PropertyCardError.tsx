import Feather from "@expo/vector-icons/Feather";
import React, { useEffect, useRef } from "react";
import { Animated, Text, TouchableOpacity } from "react-native";

type Props = {
  onRetry?: () => void;
};

const PropertyCardError = ({ onRetry }: Props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(10)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Elegant fade-in and slide-up entry
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();

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
      ]),
    ).start();
  }, [fadeAnim, pulseAnim, translateY]);

  return (
    <Animated.View
      style={{ opacity: fadeAnim, transform: [{ translateY }] }}
      className="h-[180px] w-full rounded-3xl overflow-hidden bg-red-50/50 justify-center items-center border border-red-100 px-4"
    >
      <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
        <Feather
          name="alert-circle"
          size={32}
          color="#EF4444"
          className="mb-2"
        />
      </Animated.View>
      <Text className="text-red-500 font-bold text-center">Failed to load</Text>
      <Text className="text-red-400 text-xs text-center mb-3">
        There was an error fetching the data.
      </Text>
      {onRetry && (
        <TouchableOpacity
          className="bg-red-100 px-5 py-2 rounded-full"
          onPress={onRetry}
        >
          <Text className="text-red-500 font-semibold text-xs">Retry</Text>
        </TouchableOpacity>
      )}
    </Animated.View>
  );
};

export default PropertyCardError;
