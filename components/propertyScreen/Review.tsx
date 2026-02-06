// react native imports
import { Image, Text, View } from "react-native";
// components imports
import ReviewStars from "../ReviewStars";
// types imports
import { Review } from "@/types/type";
// hooks imports
import useScreenDimensions from "@/hooks/useScreenDimensions";

//=============================================

const ReviewComp = ({ user, comment, rating, image }: Review) => {
  const { screenWidth } = useScreenDimensions();

  return (
    <View
      className="flex-row rounded-2xl border-2 border-zinc-200 py-5 px-4 gap-3 bg-white "
      style={{ width: screenWidth - 60 }}
    >
      <Image
        source={{ uri: image }}
        className="w-14 h-14 rounded-full bg-primary-300 "
        resizeMode="contain"
      />
      <View className="flex-1 gap-1">
        <View className="flex-row items-center justify-between">
          <Text className="text-xl font-bold" numberOfLines={1}>
            {user}
          </Text>
          <ReviewStars reviews={rating} starSize={15} />
        </View>
        <Text className="text-zinc-400">{comment}</Text>
      </View>
    </View>
  );
};

export default ReviewComp;
