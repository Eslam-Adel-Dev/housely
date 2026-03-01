// components imports
import ScreenWrapper from "@/components/ScreenWrapper";

// expo imports
import { useRouter } from "expo-router";
// react native imports
import CustomButton from "@/components/CustomButton";
import { Image, Text, View } from "react-native";

//icons imports
import shield from "@/assets/icons/Shield.png";

//=========================================================

const SuccessScreen = () => {
  const router = useRouter();

  return (
    <ScreenWrapper className="p-4 flex-col">
      <View className="h-[85%] items-center justify-center gap-10">
        <View className="border-[15px] border-primary-100 rounded-full size-56 items-center justify-center">
          <Image source={shield} />
        </View>
        <View className="items-center justify-center gap-4">
          <Text className="text-2xl font-bold">Success!</Text>
          <Text className="text-zinc-400 text-center">
            You password has been changed. Please log in again with a new
            password.
          </Text>
        </View>
      </View>
      <CustomButton
        onButtonPress={() => router.push("/login")}
        textClassName="text-white"
        className="rounded-lg "
      >
        Continue
      </CustomButton>
    </ScreenWrapper>
  );
};

export default SuccessScreen;
