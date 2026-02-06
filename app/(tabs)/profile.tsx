// react native imports
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
// icons imports
import Camera from "@/assets/icons/Camera.svg";
import ArrowRight from "@/assets/icons/profileScreen/ArrowRight.svg";
// expo imports
import { useRouter } from "expo-router";
// components imports
import ScreenWrapper from "@/components/ScreenWrapper";
// data imports
import { ProfileScreenOptions } from "@/data/data";
// flashlist imports
import { FlashList } from "@shopify/flash-list";
// images imports
import profilePic from "@/assets/images/profilePic.jpg";
// types imports
import TitleBar from "@/components/layout/TitleBar";
import { ProfileProps } from "@/types/type";

//=========================================================

const Profile = ({ optionName, Icon }: ProfileProps) => {
  return (
    <ScreenWrapper>
      <ScrollView className="h-full">
        {/* --------------------------------------- */}

        <TitleBar title="Profile" />
        {/* --------------------------------------- */}
        <View className="py-12 w-full items-center justify-center gap-4 border-b border-zinc-200">
          <View>
            <View className="absolute bottom-0 right-0 h-12 w-12 rounded-full bg-primary-600 items-center justify-center z-10">
              <Camera className="w-[60%] h-[60%]" />
            </View>
            <Image
              className="rounded-full"
              source={profilePic}
              style={{ width: 150, height: 150 }}
              resizeMode="cover"
            />
          </View>
          <View className="items-center justify-center gap-1">
            <Text className="text-lg font-bold">Brooklyn Simmons</Text>
            <Text className="text-zinc-400">BrooklynSimmons@gmail.com</Text>
          </View>
        </View>
        {/* --------------------------------------- */}
        <FlashList
          data={ProfileScreenOptions}
          renderItem={({ item }) => <Option {...item} />}
          horizontal={false}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View className="w-4 h-7" />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 25 }}
        />
        {/* --------------------------------------- */}
        <TouchableOpacity>
          <Text className="text-red-500 text-center text-xl">Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Profile;

//================================================

interface OptionProps {
  Icon: React.ComponentType<any>;
  optionName: string;
}

export const Option = ({ Icon, optionName }: OptionProps) => {
  const router = useRouter();
  const routeName: string = `/profile/${optionName}`;
  return (
    <TouchableOpacity
      className="w-full flex-row items-center justify-between"
      onPress={() => router.push("/profile/settings")}
    >
      <View>
        <View className="flex-row items-center gap-3">
          <Icon className="w-6 h-6" />
          <Text className="text-lg">{optionName}</Text>
        </View>
      </View>
      <ArrowRight className="w-5 h-5" />
    </TouchableOpacity>
  );
};
