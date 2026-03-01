// expo imports
// import { userStore } from "@/stores/userStore";
import { useUserContext } from "@/context/userContext";
import { Redirect, Stack } from "expo-router";

const AppLayout = () => {
  const { isLogged } = useUserContext();

  if (!isLogged) return <Redirect href="/(authScreens)/login" />;

  return (
    <Stack
      screenOptions={{ headerShown: false, presentation: "transparentModal" }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="chat/[chatId]" />
      <Stack.Screen name="chat/index" />
      <Stack.Screen name="profile/settings" />
      <Stack.Screen name="property/[id]" />
      <Stack.Screen name="notifications" />
    </Stack>
  );
};

export default AppLayout;
