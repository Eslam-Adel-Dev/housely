// react native imports
import { Text, TouchableOpacity, View } from "react-native";
// expo imports
import Feather from "@expo/vector-icons/Feather";
// expo router
import { useRouter } from "expo-router";

interface TitleBarProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
}

const TitleBar = ({ title, children, className }: TitleBarProps) => {
  const router = useRouter();
  return (
    <View
      className={`w-full ${children && "flex-row items-center justify-between"} ${className} `}
    >
      <Text className="absolute right-1/2 translate-x-1/2 font-bold text-[21px] ">
        {title}
      </Text>
      <TouchableOpacity onPress={() => router.back()}>
        <Feather name="arrow-left" size={24} />
      </TouchableOpacity>
      {children}
    </View>
  );
};

export default TitleBar;
