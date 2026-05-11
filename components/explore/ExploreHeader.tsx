import { TouchableOpacity, Image, Text } from "react-native";
import locationIcon from "@/assets/icons/Location.png";

interface ExploreHeaderProps {
  onPress: () => void;
  locationName: string | null;
}

const ExploreHeader = ({ onPress, locationName }: ExploreHeaderProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="absolute top-4 left-[4%] w-[75%] bg-[#fcfcfd] p-3 rounded-2xl shadow-lg border border-zinc-200 flex-row items-center gap-2 z-10"
    >
      <Image source={locationIcon} className="size-7" resizeMode="contain" />
      <Text className="text-lg font-bold flex-1" numberOfLines={1}>
        {locationName || "Select Location"}
      </Text>
    </TouchableOpacity>
  );
};

export default ExploreHeader;
