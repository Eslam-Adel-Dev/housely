import { View, Image, Text, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import ChatHeaderSkeleton from "@/components/skeletons/ChatHeaderSkeleton";

interface ChatHeaderProps {
  receiver: any;
  isPending: boolean;
  onBack: () => void;
}

const ChatHeader = ({ receiver, isPending, onBack }: ChatHeaderProps) => {
  if (isPending || !receiver) {
    return <ChatHeaderSkeleton />;
  }

  return (
    <View className="w-full mt-5 px-5 flex-row-reverse items-center justify-end gap-7 ">
      <View className="flex-row items-center gap-3">
        <Image
          source={{ uri: receiver.image }}
          className="w-12 h-12 rounded-full"
        />
        <View>
          <Text className="text-zinc-700 font-bold text-lg">
            {receiver.name}
          </Text>
          <Text className="text-zinc-400 font-bold text-sm">Online</Text>
        </View>
      </View>
      <TouchableOpacity onPress={onBack}>
        <Feather name="arrow-left" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default ChatHeader;
