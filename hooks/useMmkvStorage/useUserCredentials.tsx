import { storage } from "@/lib/mmkvStorage";
import { useEffect, useState } from "react";

// =================================================================

export const useUserCredintials = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    let value = storage.getString("token");
    if (value) {
      setToken(value);
      return;
    }

    setToken(null);
  }, []);

  return token;
};
