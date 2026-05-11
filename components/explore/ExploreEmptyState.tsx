import React from "react";
import { View, Text } from "react-native";
import NoSearch from "@/assets/images/NoSearch.svg";

const ExploreEmptyState = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <View className="items-center justify-center">
        <NoSearch size={500} />
        <View className="items-center justify-center gap-3 my-10">
          <Text className="font-bold text-2xl text-center">
            Search not found
          </Text>
          <View className="px-12">
            <Text className="text-md text-zinc-400 text-center">
              Please enable your location services for more optimal result
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExploreEmptyState;
