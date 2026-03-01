// hooks/useOnboardingStatus.ts
import { storage } from "@/lib/mmkvStorage";
import { useEffect, useState } from "react";

export const useOnboardingStatus = () => {
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(false);

  useEffect(() => {
    const value = storage.getBoolean("isOnboardingCompleted");
    setIsOnboardingCompleted(!!value);
  }, []);

  return isOnboardingCompleted;
};
