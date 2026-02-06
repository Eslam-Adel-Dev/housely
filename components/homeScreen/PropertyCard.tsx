// expo imports
import { LinearGradient } from "expo-linear-gradient";
// react native imports
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
// icons imports
import Liked from "@/assets/icons/Heart.svg";
import Location from "@/assets/icons/Location.svg";
import NotLiked from "@/assets/icons/tabBarIcons/inactive/Heart.svg";
// react imports
import { useState } from "react";
// types imports
import { Property } from "@/types/type";

const PropertyCard = ({
  id,
  name,
  location,
  rentPerMonth,
  image,
}: Property) => {
  const router = useRouter();
  const [isPropertyLiked, setIsPropertyLiked] = useState(false);

  return (
    <TouchableOpacity
      className="h-[180px] w-[270px] rounded-3xl overflow-hidden"
      onPress={() => router.push(`/property/${id}`)}
    >
      {typeof image === "string" ? (
        <Image
          source={{ uri: image }}
          resizeMode="cover"
          className="h-full w-full"
        />
      ) : (
        <Image source={image} resizeMode="cover" className="h-full w-full" />
      )}
      {/* --------------------------------- */}
      <View className="absolute top-5 right-5 p-2 py-1 rounded-xl bg-white flex-row gap-1 z-10 ">
        <Text className="text-primary-600 font-extrabold text-lg">
          ${rentPerMonth}
        </Text>
        <Text className="text-zinc-400">/month</Text>
      </View>
      {/* --------------------------------- */}
      <View className="absolute bottom-5 left-5 w-[65%] z-10 gap-2">
        <Text className="text-white font-bold">{name}</Text>
        <View className="flex-row gap-2 items-center">
          <Location className="w-4 h-4" />
          <Text className="text-zinc-300">{location}</Text>
        </View>
      </View>
      {/* --------------------------------- */}

      <TouchableOpacity
        className="absolute bottom-5 right-5 z-10 size-10 rounded-full items-center justify-center bg-white"
        onPress={() => setIsPropertyLiked((prev) => !prev)}
      >
        {isPropertyLiked ? (
          <Liked className="w-[60%] h-[60%]" />
        ) : (
          <NotLiked className="w-[60%] h-[60%]" />
        )}
      </TouchableOpacity>
      {/* --------------------------------- */}

      <LinearGradient
        colors={["black", "transparent"]}
        start={{ x: 0, y: 1.7 }}
        end={{ x: 0, y: 0 }}
        className="absolute h-full bottom-0 w-full "
      />
    </TouchableOpacity>
  );
};

export default PropertyCard;
