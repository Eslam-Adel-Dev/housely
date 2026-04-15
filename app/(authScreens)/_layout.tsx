// expo export
import { Redirect, Stack } from "expo-router";
// hooks imports
import { useOnboardingStatus } from "@/hooks/useMmkvStorage/useOnboardingStatus";
import { useUserCredintials } from "@/hooks/useMmkvStorage/useUserCredentials";

//=================================================

const AuthLayout = () => {
  const isOnboardingCompleted = useOnboardingStatus();
  const userCredintials = useUserCredintials();

  if (!isOnboardingCompleted) return <Redirect href="/onboarding" />;
  if (userCredintials) return <Redirect href="/" />;

  return (
    <Stack
      screenOptions={{ headerShown: false, presentation: "transparentModal" }}
      initialRouteName="login"
    >
      <Stack.Screen name="reset-password" />
      <Stack.Screen name="forgot-password" />
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
      <Stack.Screen name="success-screen" />
      <Stack.Screen name="verify-account" />
    </Stack>
  );
};

export default AuthLayout;
