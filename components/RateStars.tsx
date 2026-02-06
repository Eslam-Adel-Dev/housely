// react native imports
import { Text, View } from "react-native";
// icons imports
import Star from "@/assets/icons/Star.svg";

interface RateStarsProps {
  rate: number;
}

const RateStars = ({ rate }: RateStarsProps) => {
  return (
    <View className="bg-[#FEF0C7] flex-row gap-1 items-center px-2 py-1 text-[#FDB022] rounded-xl">
      <Star className="w-4 h-4" />
      <Text>{rate}</Text>
    </View>
  );
};

export default RateStars;
