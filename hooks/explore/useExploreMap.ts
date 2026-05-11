import { useRef, useEffect, useCallback } from "react";

export const useExploreMap = (displayLon?: number, displayLat?: number) => {
  const cameraRef = useRef<any>(null);
  const initialZoomSet = useRef(false);

  const moveCamera = useCallback((lon: number, lat: number, zoom?: number) => {
    if (cameraRef.current) {
      cameraRef.current.setCamera({
        centerCoordinate: [lon, lat],
        zoomLevel: zoom || 15,
        animationDuration: 1000,
      });
    }
  }, []);

  // Handle initial load and coordinate changes
  useEffect(() => {
    if (displayLon && displayLat && cameraRef.current) {
      const cameraOptions: any = {
        centerCoordinate: [displayLon, displayLat],
        animationDuration: 1000,
      };

      if (!initialZoomSet.current) {
        cameraOptions.zoomLevel = 15;
        initialZoomSet.current = true;
      }

      cameraRef.current.setCamera(cameraOptions);
    }
  }, [displayLat, displayLon]);

  return {
    cameraRef,
    moveCamera,
  };
};
