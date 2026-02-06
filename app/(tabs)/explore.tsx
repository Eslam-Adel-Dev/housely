// map imports
import {
  Camera,
  MapView,
  MarkerView,
  UserLocation,
} from "@maplibre/maplibre-react-native";
// react imports
import { useEffect, useState } from "react";
// images imports
import HomeGreen from "@/assets/icons/homepage-green-icon.svg";
import HomeRed from "@/assets/icons/homepage-red-icon.svg";
import MapPin from "@/assets/icons/map-pin-icon.svg";
import NoLocationImage from "@/assets/images/NoLocation.svg";
// location permission
import * as Location from "expo-location";
// react native imports
import { Alert, Text, View } from "react-native";
// components imports
import CustomButton from "@/components/CustomButton";
import ScreenWrapper from "@/components/ScreenWrapper";
// toast import
import TitleBar from "@/components/layout/TitleBar";
import Toast from "react-native-toast-message";
//=========================================================

const Explore = () => {
  const [selectedPoint, setSelectedPoint] = useState<number[] | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<number[] | null>(null);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [gpsLocation, setGpsLocation] = useState<
    Location.LocationObject | number[] | null
  >(null);

  const showToast = (message: string) => {
    Toast.show({
      type: "error",
      text1: message,
    });
  };

  //-------------------------------------------

  const getCurrentLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      showToast("Permission to access location was denied");
      Alert.alert("Permission to access location was denied");
      return;
    }
    const location = await Location.getCurrentPositionAsync();
    console.log(location);

    if (!location) {
      return;
    }

    setGpsLocation(location);
    setLatitude(location.coords.latitude);
    setLongitude(location.coords.longitude);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  //-------------------------------------------

  if (!gpsLocation && !latitude && !longitude) {
    return (
      <ScreenWrapper className="flex-1 ">
        <TitleBar title="Explore" />
        <View className="flex-1 items-center justify-center">
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
            <CustomButton
              className="rounded-lg"
              textClassName="text-white"
              onButtonPress={getCurrentLocation}
            >
              Use current location
            </CustomButton>
            <CustomButton
              className="rounded-lg bg-white border border-primary-600"
              textClassName="text-primary-600"
              onButtonPress={() => {
                setLatitude(30.0444);
                setLongitude(31.2357);
              }}
            >
              Select it manually
            </CustomButton>
          </View>
        </View>
      </ScreenWrapper>
    );
  }

  return (
    <MapView
      style={{ flex: 1 }}
      onPress={(e: any) => {
        setSelectedPoint(e.geometry.coordinates);
      }}
      mapStyle={{
        version: 8,
        sources: {
          osm: {
            type: "raster",
            tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
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
      <Camera centerCoordinate={[longitude, latitude]} zoomLevel={16} />
      <UserLocation />

      {/* selected point */}
      {selectedPoint && (
        <MarkerView coordinate={selectedPoint}>
          <MapPin width={30} height={30} />
        </MarkerView>
      )}

      {/* unavailable properties */}
      <MarkerView coordinate={[31.2, 30]}>
        <HomeRed width={30} height={30} />
      </MarkerView>

      {/* available properties */}
      <MarkerView coordinate={[35.2, 25]}>
        <HomeGreen width={30} height={30} />
      </MarkerView>
    </MapView>
  );
};

export default Explore;
