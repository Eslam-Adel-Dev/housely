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
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <UserContext>
      <ImageContext>
        <GestureHandlerRootView className="flex-1 bg-transparent">
          <SafeAreaView className="flex-1">
            <Stack
              screenOptions={{
                headerShown: false,
                presentation: "transparentModal",
              }}
            >
              <Stack.Screen name="(AppScreens)" />
              <Stack.Screen name="(authScreens)" />
              <Stack.Screen name="onboarding" />
            </Stack>
          </SafeAreaView>
        </GestureHandlerRootView>
        <Toast position="bottom" bottomOffset={20} />
      </ImageContext>
    </UserContext>
  );
}
