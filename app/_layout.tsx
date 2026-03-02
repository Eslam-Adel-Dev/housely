// css imports
import "@/global.css";
// react native imports
import { SafeAreaView } from "react-native-safe-area-context";
// expo imports
import { Stack } from "expo-router";
// navigation react imports
import { NavigationContainer } from "@react-navigation/native";
// toast imports
import ImageContext from "@/context/imageContext";
import UserContext from "@/context/userContext";
import Toast from "react-native-toast-message";

export default function RootLayout() {
  const linking = {
    prefixes: ["housely://"],
    config: {
      screens: {
        Home: "",
        Property: "property/:id",
      },
    },
  };

  return (
    <UserContext>
      <ImageContext>
        <SafeAreaView className="flex-1">
          <Toast position="bottom" bottomOffset={20} />
          <Stack screenOptions={{ headerShown: false }}>
            <NavigationContainer linking={linking}>
              <Stack.Screen name="(AppScreens)" />
              <Stack.Screen name="(authScreens)" />
              <Stack.Screen name="onboarding" />
            </NavigationContainer>
          </Stack>
        </SafeAreaView>
      </ImageContext>
    </UserContext>
  );
}
