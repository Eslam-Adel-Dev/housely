import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import RedDot from "@/components/ui/RedDot";
import locationIcon from "@/assets/icons/Location.png";
import notificationIcon from "@/assets/icons/Notification.png";
import chatIcon from "@/assets/icons/Chat.png";

interface HomeHeaderProps {
  locationName: string;
  onLocationPress: () => void;
  onLocationLongPress: () => void;
  onNotificationsPress: () => void;
  onChatPress: () => void;
}

const HomeHeader = ({
  locationName,
  onLocationPress,
  onLocationLongPress,
  onNotificationsPress,
  onChatPress,
}: HomeHeaderProps) => {
  return (
    <View className="flex-row items-center justify-between">
      <TouchableOpacity
        className="flex-row items-center gap-2 w-[60%]"
        onPress={onLocationPress}
        onLongPress={onLocationLongPress}
      >
        <Image source={locationIcon} className="size-7" resizeMode="contain" />
        <Text className="text-lg font-bold" numberOfLines={1}>
          {locationName || "Select Location"}
        </Text>
      </TouchableOpacity>
      <View className="flex-row items-center gap-2">
        <TouchableOpacity
          className="border border-zinc-300 rounded-full p-3"
          onPress={onNotificationsPress}
        >
          <RedDot />
          <Image source={notificationIcon} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity
          className="border border-zinc-300 rounded-full p-3"
          onPress={onChatPress}
        >
          <RedDot />
          <Image source={chatIcon} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;
