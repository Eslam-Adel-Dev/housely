// react native imports
import { Image, Text, View } from "react-native";
// types imports
import { AdSectionProps } from "@/types/type";

const AdSection = ({
  circleClassName,
  containerClassName,
  mainText,
  subText,
  image,
}: AdSectionProps) => {
  return (
    <View
      className={`${containerClassName} rounded-2xl bg-primary-800 h-32 w-full overflow-hidden`}
    >
      <View
        className={`${circleClassName} absolute -top-12 -right-2 w-44 h-40 rounded-full bg-[#FDB022] z-10`}
      />
      <Image
        source={image}
        className="h-full w-32 absolute bottom-0 right-0 z-20"
        resizeMode="cover"
      />
      <View className="p-5 w-1/2 gap-2">
        <Text className="text-white text-lg font-bold">{mainText}</Text>
        <Text className="text-zinc-400 text-sm">{subText}</Text>
      </View>
    </View>
  );
};

export default AdSection;
