// react imports
import { useCallback, useEffect, useState } from "react";
// expo imports
import * as Location from "expo-location";
// toast imports
import Toast from "react-native-toast-message";

//=============================================

const useUserLocation = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [loading, setLoading] = useState(false);
  const [gpsLocation, setGpsLocation] = useState<
    Location.LocationObject | number[] | null
  >(null);

  // toast function
  const showToast = useCallback((message: string) => {
    Toast.show({
      type: "error",
      text1: message,
    });
  }, []);

  // get current location function
  const getCurrentLocation = useCallback(async () => {
    setLoading(true);
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        showToast("Permission to access location was denied");
        return;
      }

      const servicesEnabled = await Location.hasServicesEnabledAsync();
      if (!servicesEnabled) {
        showToast("Please enable location services (GPS) on your device.");
        return;
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });

      if (!location) {
        return;
      }

      setGpsLocation(location);
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
    } catch (error: any) {
      if (error.message.includes("unsatisfied device settings")) {
        showToast(
          "Location services are required. Please enable them in settings.",
        );
      } else {
        showToast("Failed to fetch location. Please try again.");
      }
      console.log("Location fetch skipped or failed:", error.message);
    } finally {
      setLoading(false);
    }
  }, [showToast]);

  // useEffects
  useEffect(() => {
    getCurrentLocation();
  }, []);

  return {
    latitude,
    longitude,
    loading,
    gpsLocation,
    getCurrentLocation,
    setLatitude,
    setLongitude,
  };
};

export default useUserLocation;
