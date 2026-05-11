import { View } from "react-native";
import React from "react";

const ChatPreviewSkeleton = () => {
  return (
    <View className="gap-5">
      <View className="flex-row justify-between">
        <View className="flex-row items-center gap-3">
          {/* Avatar Skeleton */}
          <View className="h-16 w-16 rounded-full bg-zinc-200 animate-pulse" />

          <View className="gap-1">
            {/* Name Skeleton */}
            <View className="h-5 w-32 bg-zinc-200 rounded-md animate-pulse" />
            {/* Last Message Skeleton */}
            <View className="h-4 w-48 bg-zinc-200 rounded-md animate-pulse" />
          </View>
        </View>

        {/* Date Skeleton */}
        <View className="h-4 w-12 bg-zinc-200 rounded-md animate-pulse mt-1" />
      </View>

      {/* Separator Line Skeleton */}
      <View className="h-[1px] w-full mx-16 bg-zinc-200" />
    </View>
  );
};

export default ChatPreviewSkeleton;
