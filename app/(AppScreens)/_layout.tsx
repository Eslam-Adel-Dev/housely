// expo imports
import { Redirect, Stack } from "expo-router";
// hooks imports
import { useUserCredintials } from "@/hooks/useMmkvStorage/useUserCredentials";

//========================================================

const AppLayout = () => {
  const userCredintials = useUserCredintials();

  if (!userCredintials && !userCredintials?.token)
    return <Redirect href="/(authScreens)/login" />;

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
