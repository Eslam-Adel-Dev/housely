import { View, Text } from "react-native";
import Area from "@/assets/icons/area.svg";
import Bath from "@/assets/icons/bath.svg";
import Bed from "@/assets/icons/bed.svg";

interface PropertySpecsProps {
  bedrooms: number;
  bathrooms: number;
  area: string | number;
  yearBuilt: number;
  parking: string | number;
  status: string;
}

const PropertySpecs = ({ bedrooms, bathrooms, area, yearBuilt, parking, status }: PropertySpecsProps) => {
  return (
    <View className="gap-4">
      <Text className="text-xl font-bold" numberOfLines={1}>
        Property Details
      </Text>
      <View className="gap-4">
        {/* First Row */}
        <View className="w-full flex-row justify-between">
          <View className="w-1/3 gap-1">
            <Text className="text-zinc-400">Bedrooms</Text>
            <View className="flex-row items-center gap-1">
              <Bed size={20} />
              <Text className="font-bold">{bedrooms}</Text>
            </View>
          </View>
          <View className="w-1/3 gap-1">
            <Text className="text-zinc-400">Bathtubs</Text>
            <View className="flex-row items-center gap-1">
              <Bath size={20} />
              <Text className="font-bold">{bathrooms}</Text>
            </View>
          </View>
          <View className="w-1/3 gap-1">
            <Text className="text-zinc-400">Square</Text>
            <View className="flex-row items-center gap-1">
              <Area size={20} />
              <Text className="font-bold">{area}</Text>
            </View>
          </View>
        </View>

        {/* Second Row */}
        <View className="w-full flex-row justify-between">
          <View className="w-1/3 gap-1">
            <Text className="text-zinc-400">Build</Text>
            <View className="flex-row items-center gap-1">
              <Text className="font-bold">{yearBuilt}</Text>
            </View>
          </View>
          <View className="w-1/3 gap-1">
            <Text className="text-zinc-400">Parking</Text>
            <View className="flex-row items-center gap-1">
              <Text className="font-bold">{parking}</Text>
            </View>
          </View>
          <View className="w-1/3 gap-1">
            <Text className="text-zinc-400">Status</Text>
            <View className="flex-row items-center gap-1">
              <Text className="font-bold">{status}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PropertySpecs;
