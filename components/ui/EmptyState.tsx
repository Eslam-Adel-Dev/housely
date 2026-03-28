// react imports
import React from "react";
// react-native imports
import { Text, View } from "react-native";
// types imports
import { EmptyStateProps } from "@/types/type";

//=============================================

const EmptyState = ({
  title,
  subTitle,
  ImageComp,
  imageSize = 300,
}: EmptyStateProps) => {
  return (
    <View className="items-center justify-center">
      <ImageComp width={imageSize} height={imageSize} />
      <View className="w-full items-center justify-center gap-3 my-10">
        <Text className="font-bold text-2xl text-center px-4">{title}</Text>
        {subTitle && (
          <View className="px-12">
            {typeof subTitle === "string" ? (
              <Text className="text-md text-zinc-400 text-center">
                {subTitle}
              </Text>
            ) : (
              subTitle
            )}
          </View>
        )}
      </View>
    </View>
  );
};

export default EmptyState;
