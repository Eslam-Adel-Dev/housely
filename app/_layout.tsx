// css imports
import "@/global.css";
// react native imports
import { SafeAreaView } from "react-native-safe-area-context";
// expo imports
import { Stack } from "expo-router";
// toast imports
import Toast from "react-native-toast-message";
// context imports
import ImageContext from "@/context/imageContext";
import UserContext from "@/context/userContext";

export default function RootLayout() {
  return (
    <UserContext>
      <ImageContext>
        <SafeAreaView className="flex-1">
          <Toast position="bottom" bottomOffset={20} />
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(AppScreens)" />
            <Stack.Screen name="(authScreens)" />
            <Stack.Screen name="onboarding" />
          </Stack>
        </SafeAreaView>
      </ImageContext>
    </UserContext>
  );
}
