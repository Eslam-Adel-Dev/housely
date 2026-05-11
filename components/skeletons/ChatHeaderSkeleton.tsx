import { View } from "react-native";
import React from "react";

const ChatHeaderSkeleton = () => {
  return (
    <View className="w-full mt-5 px-5 flex-row-reverse items-center justify-end gap-7">
      <View className="flex-row items-center gap-3">
        {/* Avatar Skeleton */}
        <View className="w-12 h-12 rounded-full bg-zinc-200 animate-pulse" />
        
        <View className="gap-1">
          {/* Name Skeleton */}
          <View className="h-5 w-24 bg-zinc-200 rounded-md animate-pulse" />
          {/* Status Skeleton */}
          <View className="h-4 w-12 bg-zinc-200 rounded-md animate-pulse" />
        </View>
      </View>
      
      {/* Back Button Skeleton */}
      <View className="w-8 h-8 rounded-full bg-zinc-100 items-center justify-center">
        <View className="w-6 h-6 rounded-md bg-zinc-200 animate-pulse" />
      </View>
    </View>
  );
};

export default ChatHeaderSkeleton;
