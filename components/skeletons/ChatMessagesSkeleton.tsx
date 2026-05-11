import { View } from "react-native";
import React from "react";

const ChatMessagesSkeleton = () => {
  return (
    <View className="flex-1 px-4 py-6 gap-6">
      {/* Left Message (Receiver) */}
      <View className="flex-row items-end gap-2">
        <View className="w-8 h-8 rounded-full bg-zinc-200 animate-pulse" />
        <View className="bg-zinc-100 h-16 w-3/4 rounded-2xl rounded-bl-none animate-pulse" />
      </View>

      {/* Right Message (Sender) */}
      <View className="flex-row justify-end items-end gap-2">
        <View className="bg-zinc-200 h-12 w-1/2 rounded-2xl rounded-br-none animate-pulse" />
      </View>

      {/* Left Message (Receiver) */}
      <View className="flex-row items-end gap-2">
        <View className="w-8 h-8 rounded-full bg-zinc-200 animate-pulse" />
        <View className="bg-zinc-100 h-24 w-2/3 rounded-2xl rounded-bl-none animate-pulse" />
      </View>

      {/* Right Message (Sender) */}
      <View className="flex-row justify-end items-end gap-2">
        <View className="bg-zinc-200 h-20 w-3/5 rounded-2xl rounded-br-none animate-pulse" />
      </View>

      {/* Left Message (Receiver) */}
      <View className="flex-row items-end gap-2">
        <View className="w-8 h-8 rounded-full bg-zinc-200 animate-pulse" />
        <View className="bg-zinc-100 h-12 w-1/2 rounded-2xl rounded-bl-none animate-pulse" />
      </View>
    </View>
  );
};

export default ChatMessagesSkeleton;
