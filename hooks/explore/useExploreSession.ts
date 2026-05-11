import { useEffect } from "react";
import { useExploreLocation } from "./useExploreLocation";
import { useExploreMap } from "./useExploreMap";
import { useExploreUIState } from "./useExploreUIState";
import { Property } from "@/types/type";

export const useExploreSession = () => {
  const location = useExploreLocation();
  const map = useExploreMap(location.displayLon, location.displayLat);
  const ui = useExploreUIState();

  // Sync selected point from user location on initial load
  useEffect(() => {
    if (location.user?.location?.coordinates && !ui.selectedPoint) {
      const [lon, lat] = location.user.location.coordinates;
      ui.setSelectedPoint([lon, lat]);
    }
  }, [location.user?.location, ui.selectedPoint]);

  // Handle relocation effect (after GPS update)
  useEffect(() => {
    if (ui.isRelocating && location.gpsLocation) {
      // @ts-ignore
      const { latitude, longitude } = location.gpsLocation.coords || {};
      if (latitude && longitude) {
        location.updateUser({
          location: { type: "Point", coordinates: [longitude, latitude] },
        });
        ui.setSelectedPoint([longitude, latitude]);
        map.moveCamera(longitude, latitude);
        ui.setIsRelocating(false);
      }
    }
  }, [location.gpsLocation, ui.isRelocating, location.updateUser, map, ui]);

  const handleRelocating = () => {
    ui.setIsRelocating(true);
    location.getCurrentLocation();
  };

  const handleMapPress = (e: any) => {
    if (!e?.geometry?.coordinates) return;
    const [lon, lat] = e.geometry.coordinates;
    ui.setSelectedPoint([lon, lat]);
    location.handleManualLocationSet(lon, lat);
  };

  const handlePropertySelect = (property: Property) => {
    ui.setSelectedPlace(property);
    ui.bottomSheetRef.current?.expand();
  };

  return {
    ...location,
    ...map,
    ...ui,
    handleRelocating,
    handleMapPress,
    handlePropertySelect,
  };
};
