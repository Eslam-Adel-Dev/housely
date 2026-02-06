// react native imports
import { KeyboardAvoidingView, Platform } from "react-native";

// types imports
import { screenWrapperProps } from "@/types/type";

const ScreenWrapper = ({
  children,
  className,
  customStyle,
}: screenWrapperProps) => {
  return (
    <KeyboardAvoidingView
      className={`${className} p-5 bg-white flex-1`}
      style={customStyle}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export default ScreenWrapper;
