import { useState, useEffect, useCallback } from "react";

export const useResendTimer = (initialTime: number = 60) => {
  const [timer, setTimer] = useState(initialTime);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (timer > 0 && !canResend) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [timer, canResend]);

  const resetTimer = useCallback(() => {
    setTimer(initialTime);
    setCanResend(false);
  }, [initialTime]);

  return { timer, canResend, resetTimer };
};
