import { MapView, Camera, MarkerView, PointAnnotation } from "@maplibre/maplibre-react-native";
import MapPin from "@/assets/icons/map-pin-icon.svg";
import HomeGreen from "@/assets/icons/homepage-green-icon.svg";
import { Property } from "@/types/type";
import { properties } from "@/data/data";

interface ExploreMapViewProps {
  cameraRef: any;
  selectedPoint: number[] | null;
  onMapPress: (e: any) => void;
  onPropertySelect: (property: Property) => void;
}

const ExploreMapView = ({
  cameraRef,
  selectedPoint,
  onMapPress,
  onPropertySelect,
}: ExploreMapViewProps) => {
  return (
    <MapView
      style={{ flex: 1 }}
      onPress={onMapPress}
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

      {/* selected point marker */}
      {selectedPoint && (
        <MarkerView coordinate={selectedPoint}>
          <MapPin width={30} height={30} />
        </MarkerView>
      )}

      {/* available properties pins */}
      {properties.map((property) => (
        <PointAnnotation
          key={property.id}
          id={property.id}
          coordinate={[property.coords.longitude, property.coords.latitude]}
          onSelected={() => onPropertySelect(property)}
        >
          <HomeGreen width={30} height={30} />
        </PointAnnotation>
      ))}
    </MapView>
  );
};

export default ExploreMapView;
