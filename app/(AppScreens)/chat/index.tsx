// react native imports
import { Text, View } from "react-native";
// components imports
import ScreenWrapper from "@/components/ScreenWrapper";
import ChatPreview from "@/components/chatScreens/ChatPreview";
import TitleBar from "@/components/layout/TitleBar";
// icons imports
import Feather from "@expo/vector-icons/Feather";
// data imports
import { users } from "@/data/data";
// flashlist imports
import { FlashList } from "@shopify/flash-list";

//=========================================================

const SelectChat = () => {
  const newMessagesArray = Object.values(users);
  return (
    <ScreenWrapper className="gap-7">
      <TitleBar title="Messages">
        <Feather name="search" size={24} />
      </TitleBar>

      <Text className="text-xl font-bold" numberOfLines={1}>
        All Messages
      </Text>
      <FlashList
        data={newMessagesArray}
        renderItem={({ item }) => <ChatPreview {...item} />}
        keyExtractor={(item) => item._id.toString()}
        ItemSeparatorComponent={() => <View className="h-5" />}
      />
    </ScreenWrapper>
  );
};

export default SelectChat;
