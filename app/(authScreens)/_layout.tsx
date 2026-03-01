import { useUserContext } from "@/context/userContext";
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { Redirect, Stack } from "expo-router";

const AuthLayout = () => {
  const { isLogged } = useUserContext();
  const isOnboardingCompleted = useOnboardingStatus();

  if (!isOnboardingCompleted) return <Redirect href="/onboarding" />;
  if (isLogged) return <Redirect href="/" />;

  return (
    <Stack
      screenOptions={{ headerShown: false, presentation: "transparentModal" }}
      initialRouteName="login"
    >
      <Stack.Screen name="change-password" />
      <Stack.Screen name="forgot-password" />
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
      <Stack.Screen name="success-screen" />
      <Stack.Screen name="verify-account" />
    </Stack>
  );
};

export default AuthLayout;
