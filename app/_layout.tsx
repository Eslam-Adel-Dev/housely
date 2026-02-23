// css exports
import "@/global.css";
// react native exports
import { SafeAreaView } from "react-native-safe-area-context";
// expo export
import { Stack } from "expo-router";
// toast imports
import Toast from "react-native-toast-message";

export default function RootLayout() {
  return (
    <SafeAreaView className="flex-1">
      <Toast position="bottom" bottomOffset={20} />
      <Stack
        screenOptions={{ headerShown: false, presentation: "transparentModal" }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(onboarding)/onboarding" />
        <Stack.Screen name="(authScreens)/login" />
        <Stack.Screen name="(authScreens)/register" />
        <Stack.Screen name="(AppScreens)/property/[id]" />
        <Stack.Screen name="(AppScreens)/chat/index" />
        <Stack.Screen name="(AppScreens)/chat/[chatId]" />
        <Stack.Screen name="(AppScreens)/notifications" />
        <Stack.Screen
          name="(authScreens)/forgot-password"
          options={{
            presentation: "formSheet",
          }}
        />
      </Stack>
    </SafeAreaView>
  );
}
