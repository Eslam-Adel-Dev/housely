import { useState, useCallback } from "react";

export const useTogglePassword = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    setIsPasswordVisible((prev) => !prev);
  }, []);

  return {
    isPasswordVisible,
    toggleVisibility,
  };
};
