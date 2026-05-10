import { View, TouchableOpacity } from "react-native";
import TitleBar from "@/components/layout/TitleBar";
import ShareIcon from "@/assets/icons/share-2.svg";
import Liked from "@/assets/icons/Heart.svg";
import NotLiked from "@/assets/icons/tabBarIcons/inactive/Heart.svg";

interface PropertyHeaderProps {
  onShare: () => void;
  onToggleLike: () => void;
  isLiked: boolean;
}

const PropertyHeader = ({ onShare, onToggleLike, isLiked }: PropertyHeaderProps) => {
  return (
    <TitleBar title="Details">
      <View className="flex-row items-center justify-center gap-5">
        <TouchableOpacity onPress={onShare}>
          <ShareIcon size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onToggleLike}>
          {isLiked ? (
            <Liked className="w-[60%] h-[60%]" />
          ) : (
            <NotLiked className="w-[60%] h-[60%]" />
          )}
        </TouchableOpacity>
      </View>
    </TitleBar>
  );
};

export default PropertyHeader;
