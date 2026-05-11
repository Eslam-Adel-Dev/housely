import { useEffect } from "react";
import { useUserStore } from "@/store/userStore";
import useUserLocation from "@/hooks/useUserLocation";
import useLocationName from "@/hooks/useLocationName";

export const useExploreLocation = () => {
  const { user, updateUser } = useUserStore();
  const {
    latitude,
    longitude,
    gpsLocation,
    getCurrentLocation,
    setLatitude,
    setLongitude,
    loading,
    mutateLocation,
  } = useUserLocation();

  const userLocationLatitude = user?.location?.coordinates?.[1];
  const userLocationLongitude = user?.location?.coordinates?.[0];
  
  const locationName = useLocationName(
    userLocationLatitude,
    userLocationLongitude,
  );

  const displayLat = userLocationLatitude || latitude;
  const displayLon = userLocationLongitude || longitude;

  // Sync hook location to store if store is empty
  useEffect(() => {
    if (longitude && latitude && !user?.location) {
      updateUser({
        location: { type: "Point", coordinates: [longitude, latitude] },
      });
    }
  }, [longitude, latitude, user?.location, updateUser]);

  const handleSetDefaultLocation = () => {
    const lat = 30.0444;
    const lon = 31.2357;
    setLatitude(lat);
    setLongitude(lon);
    mutateLocation({ longitude: lon, latitude: lat });
    updateUser({
      location: { type: "Point", coordinates: [lon, lat] },
    });
  };

  const handleManualLocationSet = (lon: number, lat: number) => {
    mutateLocation({ longitude: lon, latitude: lat });
    updateUser({
      location: { type: "Point", coordinates: [lon, lat] },
    });
  };

  return {
    displayLat,
    displayLon,
    locationName,
    getCurrentLocation,
    handleSetDefaultLocation,
    handleManualLocationSet,
    loading,
    gpsLocation,
    user,
    updateUser
  };
};
