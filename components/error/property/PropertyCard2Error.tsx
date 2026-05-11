import { Text, TouchableOpacity, Animated, View } from "react-native";
import React, { useEffect, useRef } from "react";
import Feather from "@expo/vector-icons/Feather";
import useScreenDimensions from "@/hooks/useScreenDimensions";

type Props = {
  fullWidth?: boolean;
  onRetry?: () => void;
};

const PropertyCard2Error = ({ fullWidth, onRetry }: Props) => {
  const { screenWidth } = useScreenDimensions();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(-10)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Elegant slide-in and fade from the left
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(translateX, {
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
      ])
    ).start();
  }, [fadeAnim, pulseAnim, translateX]);

  return (
    <Animated.View
      className="flex-row h-[90px] gap-4 border-b border-red-200 px-3 pb-4 items-center bg-red-50/40 rounded-lg"
      style={{ 
        width: fullWidth ? screenWidth - 40 : screenWidth - 70,
        opacity: fadeAnim,
        transform: [{ translateX }]
      }}
    >
      {/* Icon Placeholder */}
      <View className="h-full w-[110px] rounded-2xl bg-red-100 items-center justify-center">
        <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
          <Feather name="alert-circle" size={28} color="#EF4444" />
        </Animated.View>
      </View>

      {/* Text Info */}
      <View className="flex-1 justify-center items-start gap-1">
        <Text className="text-red-500 font-bold">Failed to load</Text>
        <Text className="text-red-400 text-xs" numberOfLines={1}>
          Could not fetch data.
        </Text>
        {onRetry && (
          <TouchableOpacity
            className="bg-red-100 px-4 py-1.5 rounded-full mt-1"
            onPress={onRetry}
          >
            <Text className="text-red-500 font-semibold text-[10px]">
              Retry
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </Animated.View>
  );
};

export default PropertyCard2Error;
