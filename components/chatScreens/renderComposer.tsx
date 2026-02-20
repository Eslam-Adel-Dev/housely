// react native gifted chat imports
import { Composer, ComposerProps } from "react-native-gifted-chat";

export const renderComposer = (props: ComposerProps) => {
  return (
    <Composer
      {...props}
      textInputProps={{
        ...props.textInputProps,
        style: {
          backgroundColor: "#D2D6DB",
          borderRadius: 12,
          paddingHorizontal: 15,
          paddingVertical: 10,
          outline: "none",
          borderWidth: 0,
          color: "#3f3f46",
          flex: 1,
        },
        placeholderTextColor: "#3f3f46",
      }}
    />
  );
};
