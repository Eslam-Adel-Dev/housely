// hooks imports
import useNetworkStatus from "@/hooks/useNetworkStatus";
// react imports
import { useEffect, useRef } from "react";
// toast imports
import Toast from "react-native-toast-message";

//=============================================

const NetworkMonitor = () => {
  const isOffline = useNetworkStatus();
  const prevOffline = useRef(isOffline);

  useEffect(() => {
    if (isOffline && !prevOffline.current) {
      Toast.show({
        type: "error",
        text1: "No Internet Connection",
        text2: "Please check your network settings.",
        autoHide: false,
      });
    } else if (!isOffline && prevOffline.current) {
      Toast.hide();
      Toast.show({
        type: "success",
        text1: "Back Online",
        text2: "Your connection has been restored.",
      });
    }
    prevOffline.current = isOffline;
  }, [isOffline]);

  return null;
};

export default NetworkMonitor;
