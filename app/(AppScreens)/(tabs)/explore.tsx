// react imports
import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// images imports
import location from "@/assets/icons/Location.png";
import HomeGreen from "@/assets/icons/homepage-green-icon.svg";
import MapPin from "@/assets/icons/map-pin-icon.svg";
import NoLocationImage from "@/assets/images/NoLocation.svg";
// components imports
import CustomButton from "@/components/CustomButton";
import ScreenWrapper from "@/components/ScreenWrapper";
import BottomSheetComp from "@/components/bottomSheets/BottomSheetComp";
import PropertyCard2 from "@/components/homeScreen/PropertyCard2";
import LocationFullDetails from "@/components/layout/LocationFullDetails";
import TitleBar from "@/components/layout/TitleBar";
// icons imports
import { LocateFixed } from "lucide-react-native";
// map imports
import {
  Camera,
  MapView,
  MarkerView,
  PointAnnotation,
} from "@maplibre/maplibre-react-native";
// bottom sheet import
import BottomSheet from "@gorhom/bottom-sheet";
// data imports
import { properties } from "@/data/data";
// hooks imports
import useLocationName from "@/hooks/useLocationName";
import useUserLocation from "@/hooks/useUserLocation";
// types imports
import { Property } from "@/types/type";
// context imports
import { useUserContext } from "@/context/userContext";
//=========================================================

const Explore = () => {
  const [selectedFilter, setSelectedFilter] = useState(1);
  const [showFullLocation, setShowFullLocation] = useState(false);
  const [isRelocating, setIsRelocating] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState<number[] | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<Property | null>(null);
  const {
    latitude,
    longitude,
    gpsLocation,
    getCurrentLocation,
    setLatitude,
    setLongitude,
    loading,
  } = useUserLocation();
  const { userLocation, setUserLocation } = useUserContext();
  const locationName = useLocationName(
    userLocation?.latitude,
    userLocation?.longitude,
  );
  const bottomSheetRef = useRef<BottomSheet>(null);
  const cameraRef = useRef<any>(null);
  const initialZoomSet = useRef(false);
  const displayLat = userLocation?.latitude || latitude;
  const displayLon = userLocation?.longitude || longitude;

  //----------------------------------------------------------
  // functions

  // handle manual location set
  const handleSetDefaultLocation = () => {
    const lat = 30.0444;
    const lon = 31.2357;
    setLatitude(lat);
    setLongitude(lon);
    setUserLocation({ latitude: lat, longitude: lon });
  };

  // handle gps relocation
  const handleRelocating = () => {
    setIsRelocating(true);
    getCurrentLocation();
  };

  // handle map press to set location
  const handleMapPress = (e: any) => {
    if (!e?.geometry?.coordinates) return;
    const [lon, lat] = e.geometry.coordinates;
    setSelectedPoint([lon, lat]);
    setUserLocation({
      latitude: lat,
      longitude: lon,
    });
  };

  // handle property marker selection
  const handlePropertySelect = (property: Property) => {
    setSelectedPlace(property);
    bottomSheetRef.current?.expand();
  };

  //----------------------------------------------------------
  // useEffects

  // useEffect to set the initial zoom level
  useEffect(() => {
    if (displayLon && displayLat && cameraRef.current) {
      const cameraOptions: any = {
        centerCoordinate: [displayLon, displayLat],
        animationDuration: 1000,
      };

      // Set initial zoom level only once
      if (!initialZoomSet.current) {
        cameraOptions.zoomLevel = 10;
        initialZoomSet.current = true;
      }

      cameraRef.current.setCamera(cameraOptions);
    }
  }, [displayLat, displayLon]);

  // useEffect to auto-sync from hook if context is empty
  useEffect(() => {
    if (longitude && latitude && !userLocation) {
      setUserLocation({ latitude, longitude });
    }
  }, [longitude, latitude, userLocation]);

  // useEffect to set the selected point
  useEffect(() => {
    if (userLocation && !selectedPoint) {
      setSelectedPoint([userLocation.longitude, userLocation.latitude]);
    }
  }, [userLocation]);

  // useEffect to handle the relocation
  useEffect(() => {
    if (isRelocating && gpsLocation) {
      // @ts-ignore
      const { latitude, longitude } = gpsLocation.coords || {};
      if (latitude && longitude) {
        setUserLocation({ latitude, longitude });
        setSelectedPoint([longitude, latitude]);
        cameraRef.current?.setCamera({
          centerCoordinate: [longitude, latitude],
          zoomLevel: 15,
          animationDuration: 1000,
        });
        setIsRelocating(false);
      }
    }
  }, [gpsLocation, isRelocating]);

  //----------------------------------------------------------

  // ui when no location

  if (!userLocation && !gpsLocation && !latitude && !longitude) {
    return (
      <ScreenWrapper className="flex-1 ">
        <TitleBar title="Explore" />
        <View className="flex-1 items-center justify-center">
          {/* No location Sections */}
          <NoLocationImage size={100} />
          <View className="w-full items-center justify-center gap-3 my-10">
            <Text className="font-bold text-2xl text-center">
              Hi, Nice to meet you !
            </Text>
            <View className="px-12">
              <Text className="text-md text-zinc-400 text-center">
                Choose your location to find property around you
              </Text>
            </View>
          </View>
          <View className="w-full gap-3">
            {/* Use current location button */}
            <CustomButton
              className="rounded-lg"
              textClassName="text-white"
              onButtonPress={getCurrentLocation}
              loading={loading}
            >
              Use current location
            </CustomButton>

            {/* Select it manually button */}
            <CustomButton
              className="rounded-lg bg-white border border-primary-600"
              textClassName="text-primary-600"
              disabled={loading}
              onButtonPress={handleSetDefaultLocation}
            >
              Select it manually
            </CustomButton>
          </View>
        </View>
      </ScreenWrapper>
    );
  }

  // ui when location is selected
  return (
    <View className="flex-1">
      {/* Location name button */}
      <TouchableOpacity
        onPress={() => setShowFullLocation(true)}
        className="absolute top-4 left-[4%] w-[75%] bg-[#fcfcfd] p-3 rounded-2xl shadow-lg border border-zinc-200 flex-row items-center gap-2 z-10"
      >
        <Image source={location} className="size-7" resizeMode="contain" />
        <Text className="text-lg font-bold flex-1" numberOfLines={1}>
          {locationName || "Select Location"}
        </Text>
      </TouchableOpacity>

      {/* Relocate to GPS location button */}
      <TouchableOpacity
        onPress={handleRelocating}
        disabled={loading}
        className={`absolute bottom-4 right-4 bg-[#fcfcfd] p-4 rounded-full shadow-lg border border-zinc-200 z-10 `}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#6941C6" />
        ) : (
          <LocateFixed size={24} color="#6941C6" />
        )}
      </TouchableOpacity>

      {/* map */}
      <MapView
        style={{ flex: 1 }}
        onPress={handleMapPress}
        mapStyle={{
          version: 8,
          sources: {
            osm: {
              type: "raster",
              tiles: [
                "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
                "https://b.tile.openstreetmap.org/{z}/{x}/{y}.png",
                "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
              ],
              tileSize: 256,
            },
          },
          layers: [
            {
              id: "osm",
              type: "raster",
              source: "osm",
            },
          ],
        }}
      >
        <Camera ref={cameraRef} />

        {/* selected point */}
        {selectedPoint && (
          <MarkerView coordinate={selectedPoint}>
            <MapPin width={30} height={30} />
          </MarkerView>
        )}

        {/* available properties */}
        {properties.map((property) => {
          return (
            <PointAnnotation
              key={property.id}
              id={property.id}
              coordinate={[property.coords.longitude, property.coords.latitude]}
              onSelected={() => handlePropertySelect(property)}
            >
              <HomeGreen width={30} height={30} />
            </PointAnnotation>
          );
        })}
      </MapView>

      {/* bottom sheet of selected property */}
      {selectedPlace && (
        <BottomSheetComp
          ref={bottomSheetRef}
          snapPoints={["40%"]}
          index={0}
          onClose={() => setSelectedPlace(null)}
        >
          <PropertyCard2 {...selectedPlace} fullWidth={true} />
        </BottomSheetComp>
      )}

      {/* full location details */}
      <LocationFullDetails
        visible={showFullLocation}
        onClose={() => setShowFullLocation(false)}
        locationName={locationName}
      />
    </View>
  );
};

export default Explore;
