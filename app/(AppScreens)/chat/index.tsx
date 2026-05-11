// react native imports
import { RefreshControl, Text, View } from "react-native";
// components imports
import ScreenWrapper from "@/components/ScreenWrapper";
import ChatPreview from "@/components/chatScreens/ChatPreview";
import EmptyState from "@/components/empty/EmptyState";
import ErrorState from "@/components/error/ErrorState";
import TitleBar from "@/components/layout/TitleBar";
// icons imports
import Feather from "@expo/vector-icons/Feather";
// data imports
// flashlist imports
import { useGetConversations } from "@/api/hooks/useChat";
import ChatListSkeleton from "@/components/skeletons/ChatListSkeleton";
import { ChatPreviewProps } from "@/types/type";
import { FlashList } from "@shopify/flash-list";

//=========================================================

const SelectChat = () => {
  const { conversations, isPending, isError, refetch, isFetched } =
    useGetConversations();

  if (isError) {
    return (
      <ErrorState
        title="Messages Unavailable"
        message="We're having trouble loading your conversations. Please try again later."
        onRetry={() => console.log("Retry loading messages")}
      />
    );
  }

  return (
    <ScreenWrapper className="gap-7">
      <TitleBar title="Messages">
        <Feather name="search" size={24} />
      </TitleBar>

      <Text className="text-xl font-bold" numberOfLines={1}>
        All Messages
      </Text>

      {isPending ? (
        <ChatListSkeleton />
      ) : (
        <FlashList
          refreshControl={
            <RefreshControl refreshing={isPending} onRefresh={refetch} />
          }
          data={conversations || []}
          renderItem={({ item }) => <ChatPreview {...item} />}
          keyExtractor={(item: ChatPreviewProps) => item._id.toString()}
          ItemSeparatorComponent={() => <View className="h-5" />}
          contentContainerStyle={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <EmptyState
              title="No Messages"
              message="You don't have any messages yet. Start a conversation with an agent to see them here."
              icon="message-circle"
            />
          }
        />
      )}
    </ScreenWrapper>
  );
};

export default SelectChat;
