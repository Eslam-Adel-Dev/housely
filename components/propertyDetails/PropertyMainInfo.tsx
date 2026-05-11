import { View, Text } from "react-native";
import LocationIcon from "@/assets/icons/Location.svg";

interface PropertyMainInfoProps {
  name: string;
  price: string | number;
  address: string;
}

const PropertyMainInfo = ({ name, price, address }: PropertyMainInfoProps) => {
  return (
    <View className="gap-3">
      <View className="flex-row items-center justify-between">
        <Text className="text-2xl font-bold w-[70%]">
          {name}
        </Text>

        <View className="p-2 py-1 rounded-xl flex-row gap-1 z-10 ">
          <Text className="text-primary-600 font-extrabold text-xl -mt-1">
            ${price}
          </Text>
          <Text className="text-zinc-400">/month</Text>
        </View>
      </View>

      <View className="flex-row gap-2 items-center -ml-1">
        <LocationIcon className="w-4 h-4" />
        <Text className="text-zinc-400 text-lg">
          {address}
        </Text>
      </View>
    </View>
  );
};

export default PropertyMainInfo;
