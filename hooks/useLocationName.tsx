// react imports
import { useEffect, useState } from "react";
// expo imports
import * as Location from "expo-location";

//=============================================

const useLocationName = (lat: number | undefined, lon: number | undefined) => {
  const [locationName, setLocationName] = useState<string>("Selected Location");

  // useEffect to get location name
  useEffect(() => {
    const fetchLocationName = async () => {
      if (!lat || !lon) return;

      try {
        const address = await Location.reverseGeocodeAsync({
          latitude: lat,
          longitude: lon,
        });

        if (address && address.length > 0) {
          const item = address[0];
          const city = item.city || item.subregion || item.district || "";
          const region = item.region || item.country || "";
          const name =
            `${city}${city && region ? ", " : ""}${region}` ||
            "Selected Location";
          setLocationName(name);
        }
      } catch (error) {
        console.log("Reverse geocoding failed:", error);
        setLocationName("Selected Location");
      }
    };

    fetchLocationName();
  }, [lat, lon]);

  return locationName;
};

export default useLocationName;
