// react imports
import { Text, TouchableOpacity } from "react-native";
// types imports
import { CustomButtonProps } from "@/types/type";

const CustomButton = ({
  className,
  textClassName,
  children,
  onButtonPress,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onButtonPress}
      className={`${className} bg-primary-600 py-4`}
    >
      <Text className={`${textClassName} text-center text-xl`}>{children}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
