// react imports
import { useEffect, useState } from "react";
// netinfo imports
import NetInfo from "@react-native-community/netinfo";

//=============================================

const useNetworkStatus = () => {
  const [isOffline, setIsOffline] = useState(false);

  // useEffect to check network status
  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
      const offline = !(state.isConnected && state.isInternetReachable);
      setIsOffline(offline);
    });

    return () => removeNetInfoSubscription();
  }, []);

  return isOffline;
};

export default useNetworkStatus;
