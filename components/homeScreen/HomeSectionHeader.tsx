import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface HomeSectionHeaderProps {
  title: string;
  onSeeAll?: () => void;
}

const HomeSectionHeader = ({ title, onSeeAll }: HomeSectionHeaderProps) => {
  return (
    <View className="flex-row items-center justify-between">
      <Text className="text-xl font-bold">{title}</Text>
      <TouchableOpacity onPress={onSeeAll}>
        <Text className="text-primary-400 text-md font-semibold">See All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeSectionHeader;
