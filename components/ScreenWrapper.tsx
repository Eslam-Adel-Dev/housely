// react native imports
import { View } from "react-native";

// types imports
import { screenWrapperProps } from "@/types/type";

const ScreenWrapper = ({
  children,
  className,
  customStyle,
}: screenWrapperProps) => {
  return (
    <View className={`${className} flex-1 p-5 bg-white`} style={customStyle}>
      {children}
    </View>
  );
};

export default ScreenWrapper;
