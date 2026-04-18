import { View } from "react-native";
import React from "react";
import useScreenDimensions from "@/hooks/useScreenDimensions";

type Props = {
  fullWidth?: boolean;
};

const PropertyCard2Skeleton = ({ fullWidth }: Props) => {
  const { screenWidth } = useScreenDimensions();

  return (
    <View
      className="flex-row h-[90px] gap-4 border-b border-zinc-200 px-2 pb-4"
      style={{ width: fullWidth ? screenWidth - 40 : screenWidth - 70 }}
    >
      {/* Image Skeleton */}
      <View className="h-full w-[110px] rounded-2xl bg-zinc-200 animate-pulse" />

      {/* ------------------------ */}
      <View className="flex-1 justify-between py-1">
        {/* Top Row: Name and Like Button */}
        <View className="flex-row items-center justify-between">
          <View className="h-5 w-[70%] bg-zinc-200 rounded-md animate-pulse" />
          <View className="size-6 rounded-full bg-zinc-200 animate-pulse" />
        </View>

        {/* Middle Row: Location */}
        <View className="flex-row items-center gap-2">
          {/* Location Icon Placeholder */}
          <View className="size-4 rounded-full bg-zinc-200 animate-pulse" />
          {/* Address Placeholder */}
          <View className="h-3 w-[60%] bg-zinc-200 rounded-md animate-pulse" />
        </View>

        {/* Bottom Row: Price and Rating */}
        <View className="flex-row items-center justify-between mt-1">
          {/* Price Placeholder */}
          <View className="h-5 w-[40%] bg-zinc-200 rounded-md animate-pulse" />
          {/* Stars Placeholder */}
          <View className="h-4 w-[30%] bg-zinc-200 rounded-md animate-pulse" />
        </View>
      </View>
    </View>
  );
};

export default PropertyCard2Skeleton;
