// react native imports
import {
  IMessage,
  InputToolbar,
  InputToolbarProps,
} from "react-native-gifted-chat";

export const renderInputToolbar = (props: InputToolbarProps<IMessage>) => {
  return (
    <InputToolbar
      {...props}
      primaryStyle={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
      }}
      containerStyle={{
        marginVertical: 20,
        marginHorizontal: 20,
        backgroundColor: "transparent",
        borderTopWidth: 0,
      }}
    />
  );
};
