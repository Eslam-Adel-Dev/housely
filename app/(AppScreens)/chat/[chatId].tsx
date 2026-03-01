// components imports
import ImageBubble from "@/components/chatScreens/ImageBubble";
import ImagePreview from "@/components/chatScreens/ImagePreview";
import renderActions from "@/components/chatScreens/renderActions";
import { renderBubble } from "@/components/chatScreens/renderBubble";
import { renderComposer } from "@/components/chatScreens/renderComposer";
import { renderInputToolbar } from "@/components/chatScreens/renderInputToolbar";
import { renderSend } from "@/components/chatScreens/renderSend";
import VideoBubble from "@/components/chatScreens/VideoBubble";
// data imports
import { conversations, users } from "@/data/data";
// types imports
import { User } from "@/types/type";
// icons imports
import Feather from "@expo/vector-icons/Feather";
// expo imports
import { useLocalSearchParams, useRouter } from "expo-router";
// react imports
import { useHeaderHeight } from "@react-navigation/elements";
import { useCallback, useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
// gifted chat imports
import { GiftedChat, IMessage } from "react-native-gifted-chat";
// hooks imports
import ActionSheet from "@/components/chatScreens/ActionSheet";
import { useMediaPicker } from "@/hooks/useMediaPicker";

//=========================================================

const Chat = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [user, setUser] = useState<User | undefined>();
  const [sheetVisible, setSheetVisible] = useState(false);
  const { handleMediaPicker, media, setMedia } = useMediaPicker();
  const { chatId } = useLocalSearchParams();
  const headerHeight = useHeaderHeight();
  const router = useRouter();
  const id = Number(chatId);

  //=========================================================
  // useEffect for getting the current user

  useEffect(() => {
    const currentUsers = Object.values(users);
    const user = currentUsers.find((user) => user._id === id);
    setMessages(conversations[id]);
    setUser(user);
  }, [id]);

  // rerender test
  // console.warn("Loop happened");

  //=========================================================
  // send message function

  const onSend = useCallback(
    (messages: IMessage[] = []) => {
      let giftedImage: IMessage;

      if (media) {
        giftedImage = {
          text: "",
          _id: Date.now().toString(),
          createdAt: new Date(),
          image: media.type === "image" ? media.uri : undefined,
          video: media.type === "video" ? media.uri : undefined,
          user: {
            _id: 1,
          },
        };

        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, [giftedImage]),
        );
        setMedia(null);
        return;
      }
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages),
      );
    },
    [media, setMedia],
  );

  //=========================================================
  // useEffect to automatically send the image

  useEffect(() => {
    if (media) {
      onSend();
    }
  }, [media, onSend]);

  //=========================================================

  return (
    <View className="flex-1 bg-white">
      {/* header */}
      <View className="w-full mt-5 px-5 flex-row-reverse items-center justify-end gap-7 ">
        <View className="flex-row items-center gap-3">
          <Image
            source={{ uri: user && user.image }}
            className="w-12 h-12 rounded-full"
          />
          <View>
            <Text className="text-zinc-700 font-bold text-lg">
              {user && user.name}
            </Text>
            <Text className="text-zinc-400 font-bold text-sm">Online</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="arrow-left" size={24} />
        </TouchableOpacity>
      </View>

      {/* chat section */}
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
          name: "You",
          avatar: "https://i.pravatar.cc/150?img=1",
        }}
        keyboardAvoidingViewProps={{
          keyboardVerticalOffset: headerHeight + 100,
        }}
        isUsernameVisible
        isCustomViewBottom
        isScrollToBottomEnabled
        isDayAnimationEnabled
        renderBubble={renderBubble}
        renderInputToolbar={renderInputToolbar}
        renderComposer={renderComposer}
        renderActions={renderActions}
        renderSend={renderSend}
        onPressActionButton={() => setSheetVisible(true)}
        renderMessageImage={(props) => <ImageBubble {...props} />}
        renderMessageVideo={(props) => <VideoBubble {...props} />}
      />
      {/* action sheet */}
      <ActionSheet
        visible={sheetVisible}
        onClose={() => setSheetVisible(false)}
        onPickImage={() => handleMediaPicker("images")}
        onPickVideo={() => handleMediaPicker("videos")}
      />

      <ImagePreview />
    </View>
  );
};

export default Chat;
