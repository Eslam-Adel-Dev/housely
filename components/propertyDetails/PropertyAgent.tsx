import { View, Text, Image, TouchableOpacity } from "react-native";
import Call_Icon from "@/assets/icons/Call_Icon.svg";
import Chat_Icon from "@/assets/icons/Chat_Icon.svg";

interface PropertyAgentProps {
  agent: {
    name: string;
    image: string;
    profession: string;
    _id: string;
  };
  onCall: () => void;
  onChat: () => void;
}

const PropertyAgent = ({ agent, onCall, onChat }: PropertyAgentProps) => {
  return (
    <View className="gap-4">
      <Text className="text-xl font-bold">Agent</Text>
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-4">
          <Image
            source={{
              uri: agent?.image || "https://www.loremfaces.net/96/id/1.jpg",
            }}
            className="w-14 h-14 rounded-full bg-primary-300"
            resizeMode="cover"
          />
          <View>
            <Text className="font-bold">{agent?.name}</Text>
            <Text className="text-zinc-400" numberOfLines={1}>
              {agent?.profession}
            </Text>
          </View>
        </View>
        <View className="flex-row items-center gap-3">
          <TouchableOpacity
            className="bg-primary-100/40 p-2 rounded-full"
            onPress={onCall}
          >
            <Call_Icon size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-primary-100/40 p-2 rounded-full"
            onPress={onChat}
          >
            <Chat_Icon size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PropertyAgent;
