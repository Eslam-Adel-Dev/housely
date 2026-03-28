// react imports
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
// types imports
import { CustomButtonProps } from "@/types/type";

//=============================================

const CustomButton = ({
  className,
  textClassName,
  children,
  onButtonPress,
  loading,
  disabled,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onButtonPress}
      disabled={disabled || loading}
      className={`${className} bg-primary-600 py-4 ${disabled || loading ? "opacity-50" : ""}`}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text className={`${textClassName} text-center text-xl`}>
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
