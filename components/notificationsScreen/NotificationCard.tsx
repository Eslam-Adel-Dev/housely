// types imports
import { NotificationProps } from "@/types/type";
// react native imports
import { Text, View } from "react-native";
// icons imports
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Octicons from "@expo/vector-icons/Octicons";
// expo imports
import { LinearGradient } from "expo-linear-gradient";

//===============================================

const NotificationCard = ({ type, text, createdAt }: NotificationProps) => {
  const date = new Date(createdAt).toLocaleDateString().toString();
  return (
    <View className="relative flex-row gap-3 items-center justify-between border-b border-zinc-100 drop-shadow-md p-4 rounded-2xl overflow-hidden">
      <LinearGradient
        colors={["white", "#d8ccff", "white"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        dither={false}
        className="absolute inset-0 opacity-10"
      />
      <View className="flex-row items-center gap-4 flex-1">
        <View className="w-12 h-12 bg-white rounded-full items-center justify-center border border-zinc-300">
          <View className="h-3 w-3 bg-red-500 rounded-full absolute top-0 right-0" />
          {type === "message" ? (
            <AntDesign name="message" size={21} color="#6941C6" />
          ) : type === "system" ? (
            <FontAwesome6 name="bell" size={21} color="#6941C6" />
          ) : (
            <Octicons name="person" size={21} color="#6941C6" />
          )}
        </View>
        <Text className="font-semibold text-zinc-700 w-[70%]">{text}</Text>
      </View>
      <Text className="text-zinc-500/70">{date}</Text>
    </View>
  );
};

export default NotificationCard;
