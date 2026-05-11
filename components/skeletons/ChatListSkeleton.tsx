import { FlashList } from "@shopify/flash-list";
import React from "react";
import { View } from "react-native";
import ChatPreviewSkeleton from "./ChatPreviewSkeleton";

const ChatListSkeleton = () => {
  const data = Array(8).fill(0);
  return (
    <FlashList
      data={data}
      renderItem={() => <ChatPreviewSkeleton />}
      keyExtractor={(_, index) => index.toString()}
      ItemSeparatorComponent={() => <View className="h-5" />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ChatListSkeleton;
