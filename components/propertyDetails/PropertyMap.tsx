import { View, Text } from "react-native";
import { Camera, MapView, MarkerView } from "@maplibre/maplibre-react-native";
import MapPin from "@/assets/icons/map-pin-icon.svg";

interface PropertyMapProps {
  location: {
    coordinates: number[];
  };
}

const PropertyMap = ({ location }: PropertyMapProps) => {
  return (
    <View className="gap-4">
      <Text className="text-xl font-bold">
        Location & Public Fasilities
      </Text>

      <View className="h-[200px] rounded-lg overflow-hidden border-2 border-zinc-300">
        <MapView
          style={{ flex: 1 }}
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
          <Camera
            centerCoordinate={[
              location.coordinates[0],
              location.coordinates[1],
            ]}
            zoomLevel={16}
          />

          <MarkerView
            coordinate={[
              location.coordinates[0],
              location.coordinates[1],
            ]}
          >
            <MapPin width={30} height={30} />
          </MarkerView>
        </MapView>
      </View>
    </View>
  );
};

export default PropertyMap;
