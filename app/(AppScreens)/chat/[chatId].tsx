import { useLocalSearchParams, useRouter } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import { View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

// components imports
import ImageBubble from "@/components/chatScreens/ImageBubble";
import ImagePreview from "@/components/chatScreens/ImagePreview";
import renderActions from "@/components/chatScreens/renderActions";
import { renderBubble } from "@/components/chatScreens/renderBubble";
import { renderComposer } from "@/components/chatScreens/renderComposer";
import { renderInputToolbar } from "@/components/chatScreens/renderInputToolbar";
import { renderSend } from "@/components/chatScreens/renderSend";
import VideoBubble from "@/components/chatScreens/VideoBubble";
import ActionSheet from "@/components/chatScreens/ActionSheet";
import EmptyState from "@/components/empty/EmptyState";
import ChatMessagesSkeleton from "@/components/skeletons/ChatMessagesSkeleton";
import ChatHeader from "@/components/chatScreens/ChatHeader";

// hooks imports
import { useChatSession } from "@/hooks/chat/useChatSession";

//=========================================================

const Chat = () => {
  const { chatId } = useLocalSearchParams();
  const router = useRouter();
  const headerHeight = useHeaderHeight();

  // Decomposed Senior Logic Hook
  const {
    messages,
    receiver,
    user,
    isPending,
    onSend,
    handleMediaPicker,
    sheetVisible,
    setSheetVisible,
  } = useChatSession(String(chatId));

  //=========================================================

  return (
    <View className="flex-1 bg-white">
      {/* Header Section */}
      <ChatHeader
        receiver={receiver}
        isPending={isPending}
        onBack={() => router.back()}
      />

      {/* Chat Section */}
      {isPending ? (
        <ChatMessagesSkeleton />
      ) : (
        <GiftedChat
          messages={messages}
          onSend={onSend}
          user={{
            _id: user?._id || 1,
            name: user?.name || "You",
            avatar: user?.image || "https://i.pravatar.cc/150?img=1",
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
          renderChatEmpty={() => (
            <View
              style={{
                flex: 1,
                transform: [{ scaleY: -1 }, { scaleX: -1 }],
                paddingBottom: "50%",
              }}
            >
              <EmptyState
                title="No Messages Yet"
                message="Send your first message to get started"
              />
            </View>
          )}
        />
      )}

      {/* Overlays */}
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

