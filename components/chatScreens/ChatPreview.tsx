// react native imports
import { Image, Text, TouchableOpacity, View } from "react-native";
// types imports
import { ChatPreviewProps } from "@/types/type";
// expo router import
import { formatChatTime } from "@/lib/utils";
import { useRouter } from "expo-router";

//=============================================

const ChatPreview = ({
  _id,
  name,
  lastMessage,
  messageTime,
  image,
}: ChatPreviewProps) => {
  const router = useRouter();
  const date = formatChatTime(messageTime);

  return (
    <TouchableOpacity
      className="gap-5"
      onPress={() => {
        router.push(`/chat/${_id}`);
      }}
    >
      <View className="flex-row justify-between">
        <View className="flex-row items-center gap-3">
          <Image source={{ uri: image }} className="h-16 w-16 rounded-full" />
          <View className="gap-1">
            <Text className="text-xl font-bold" numberOfLines={1}>
              {name}
            </Text>
            <Text className="text-zinc-400" numberOfLines={1}>
              {lastMessage}
            </Text>
          </View>
        </View>
        <Text className="text-zinc-400">{date}</Text>
      </View>
      <View className="h-[1px] w-full mx-16 bg-zinc-200" />
    </TouchableOpacity>
  );
};

export default ChatPreview;
