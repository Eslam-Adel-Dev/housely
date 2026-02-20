// icons imports
import SendIcon from "@/assets/icons/Send.svg";
// react gifted chat imports
import { IMessage, Send, SendProps } from "react-native-gifted-chat";
//=================================================

export const renderSend = (props: SendProps<IMessage>) => {
  return (
    <Send
      {...props}
      containerStyle={{
        width: 44,
        height: 44,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#7F56D9",
        borderRadius: 100,
        opacity: 1,
      }}
    >
      <SendIcon size={24} />
    </Send>
  );
};
