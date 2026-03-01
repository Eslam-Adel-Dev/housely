// icons imports
import Liked from "@/assets/icons/Heart.svg";
import Location from "@/assets/icons/Location.svg";
import NotLiked from "@/assets/icons/tabBarIcons/inactive/Heart.svg";
// react imports
import { Image, Text, TouchableOpacity, View } from "react-native";
// components imports
import RateStars from "../RateStars";
// types imports
import useScreenDimensions from "@/hooks/useScreenDimensions";
import { avgPropertyRatingFunction } from "@/lib/utils";
import { Property } from "@/types/type";
// hooks
import useFavoriteProperties from "@/hooks/useFavoriteProperties";
// expo router
import { useRouter } from "expo-router";

//=============================================

type fullWidthType = {
  fullWidth?: boolean;
};

//=============================================

const PropertyCard2 = (props: Property & fullWidthType) => {
  //--------------------------------
  const { id, name, location, rentPerMonth, image, reviews, fullWidth } = props;
  const { isLiked: isPropertyLiked, toggleLike } = useFavoriteProperties(props);
  const { screenWidth } = useScreenDimensions();
  const avgRating = avgPropertyRatingFunction(reviews);
  const router = useRouter();
  //--------------------------------

  return (
    <TouchableOpacity
      className="flex-row h-[90px] gap-4 border-b border-zinc-200 px-2 pb-4"
      style={{ width: fullWidth ? screenWidth - 40 : screenWidth - 70 }}
      onPress={() => router.push(`/property/${id}`)}
    >
      {typeof image === "string" ? (
        <Image
          source={{ uri: image }}
          resizeMode="cover"
          className="h-full w-[110px] rounded-2xl"
        />
      ) : (
        <Image
          source={image}
          resizeMode="cover"
          className="h-full w-[110px] rounded-2xl"
        />
      )}

      {/* ------------------------ */}
      <View className="flex-1 justify-between">
        <View className="flex-row items-center justify-between">
          <Text className="font-bold text-lg pr-5 w-[85%]" numberOfLines={1}>
            {name}
          </Text>
          <TouchableOpacity onPress={toggleLike}>
            {isPropertyLiked ? <Liked className="w-20 h-20" /> : <NotLiked />}
          </TouchableOpacity>
        </View>
        {/* ------------------------ */}

        <View className="flex-row items-center gap-1">
          <Location className="w-8 h-8" />
          <Text className="text-zinc-500/90 text-sm" numberOfLines={1}>
            {location}
          </Text>
        </View>
        {/* ------------------------ */}

        <View className="flex-row items-center justify-between">
          <Text>
            <Text className="font-bold text-lg">${rentPerMonth}</Text>/month
          </Text>
          <RateStars rate={avgRating} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PropertyCard2;
