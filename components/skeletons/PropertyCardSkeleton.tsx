import { View } from "react-native";
import React from "react";

const PropertyCardSkeleton = () => {
  return (
    <View className="h-[180px] w-[270px] rounded-3xl overflow-hidden bg-zinc-200 animate-pulse relative">
      {/* Price Pill Skeleton */}
      <View className="absolute top-5 right-5 w-16 h-8 rounded-xl bg-zinc-300 z-10 animate-pulse" />

      {/* Info Block Skeleton */}
      <View className="absolute bottom-5 left-5 w-[65%] z-10 gap-2">
        <View className="h-4 w-3/4 bg-zinc-300 rounded-md animate-pulse" />
        <View className="h-3 w-1/2 bg-zinc-300 rounded-md mt-1 animate-pulse" />
      </View>

      {/* Button Skeleton */}
      <View className="absolute bottom-5 right-5 z-10 size-10 rounded-full bg-zinc-300 animate-pulse" />
    </View>
  );
};

export default PropertyCardSkeleton;
