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
import SocketProvider from "@/context/socketContext";
import UserContext from "@/context/userContext";
// gesture handler imports
import { GestureHandlerRootView } from "react-native-gesture-handler";
// components imports
import NetworkMonitor from "@/components/NetworkMonitor";
// tanstack imports
import queryClient from "@/api/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
//================================================================

export default function RootLayout() {
  return (
    <SocketProvider>
      <UserContext>
        <ImageContext>
          <GestureHandlerRootView className="flex-1 bg-transparent">
            <QueryClientProvider client={queryClient}>
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
            </QueryClientProvider>
          </GestureHandlerRootView>
          <NetworkMonitor />
          <Toast position="bottom" bottomOffset={30} />
        </ImageContext>
      </UserContext>
    </SocketProvider>
  );
}
