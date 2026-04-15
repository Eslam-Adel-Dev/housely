import { storage } from "@/lib/mmkvStorage";
import { useEffect, useState } from "react";

// =================================================================

export const useUserCredintials = () => {
  const [userCredentials, setUserCredentials] = useState<any>(null);

  useEffect(() => {
    let value = storage.getString("userCredentials");
    if (value) {
      value = JSON.parse(value);
      setUserCredentials(value);
      return;
    }

    setUserCredentials(null);
  }, []);

  return userCredentials;
};
