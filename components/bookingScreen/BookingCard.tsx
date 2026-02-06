// icons imports
import Location from "@/assets/icons/Location.svg";
// react imports
import { Image, Text, View } from "react-native";
// components imports
// types imports
import { BookingCardProps } from "@/types/type";

//=====================================================

const BookingCard = ({
  propertyName,
  location,
  date,
  image,
}: BookingCardProps) => {
  return (
    <View className="flex-row h-[90px] gap-4 border-b border-zinc-200 px-2 pb-4">
      <Image
        source={image}
        resizeMode="cover"
        className="h-full w-[110px] rounded-lg"
      />
      {/* ------------------------ */}
      <View className="flex-1 justify-between">
        <View className="flex-row items-center justify-between">
          <Text className="font-bold text-lg">{propertyName}</Text>
        </View>
        {/* ------------------------ */}

        <View className="flex-row items-center gap-1">
          <Location className="w-8 h-8" />
          <Text className="text-zinc-500/90 text-sm">{location}</Text>
        </View>
        {/* ------------------------ */}

        <View className="flex-row items-center justify-between">
          <Text className="text-sm text-zinc-500/80">{date}</Text>
          <PropertyStatus status="Waiting Payment" />
        </View>
      </View>
    </View>
  );
};

export default BookingCard;

//=====================================================

export const PropertyStatus = ({
  status,
}: {
  status: "Waiting Payment" | "Cancelled" | "Completed" | "Checking";
}) => {
  const colors = {
    "Waiting Payment": {
      bg: "bg-orange-100",
      text: "text-orange-500",
    },
    Cancelled: {
      bg: "bg-red-100",
      text: "text-red-500",
    },
    Completed: {
      bg: "bg-green-100",
      text: "text-green-600",
    },
    Checking: {
      bg: "bg-green-100",
      text: "text-green-600",
    },
  };

  return (
    <View
      className={`${colors[status].bg} rounded-lg px-2 py-1 flex-row items-center gap-1`}
    >
      <Text className={`${colors[status].text} text-sm`}>{status}</Text>
    </View>
  );
};
