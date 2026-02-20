import { Bubble, BubbleProps, IMessage, Time } from "react-native-gifted-chat";

export const renderBubble = (props: BubbleProps<IMessage>) => {
  return (
    <Bubble
      {...props}
      messageTextProps={{
        ...props.messageTextProps,
        containerStyle: {
          left: {
            backgroundColor: "#D2D6DB",
            padding: 10,
            paddingHorizontal: 15,
            borderRadius: 10,
            borderBottomLeftRadius: 0,
          },
          right: {
            backgroundColor: "#7F56D9",
            padding: 10,
            paddingHorizontal: 15,
            borderRadius: 10,
            borderBottomRightRadius: 0,
          },
        },
      }}
      usernameStyle={{
        fontSize: 12,
        fontWeight: "bold",
      }}
      containerStyle={{
        left: {
          padding: 0,
          marginLeft: 0,
        },
      }}
      wrapperStyle={{
        left: {
          backgroundColor: "transparent",
        },
        right: {
          backgroundColor: "transparent",
        },
      }}
      renderTime={(timeProps) => {
        return (
          <Time
            {...timeProps}
            timeTextStyle={{
              left: {
                color: "#667085",
                fontSize: 10,
              },
              right: {
                color: "#667085",
                fontSize: 10,
              },
            }}
            containerStyle={{
              left: {
                marginBottom: 5,
                marginLeft: 10,
              },
              right: {
                marginBottom: 5,
                marginRight: 10,
              },
            }}
          />
        );
      }}
    />
  );
};
