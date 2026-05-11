import { View } from "react-native";

// components imports
import BottomSheetComp from "@/components/bottomSheets/BottomSheetComp";
import PropertyCard2 from "@/components/homeScreen/PropertyCard2";
import LocationFullDetails from "@/components/layout/LocationFullDetails";

// explore specific components
import ExploreHeader from "@/components/explore/ExploreHeader";
import ExploreControls from "@/components/explore/ExploreControls";
import ExploreEmptyState from "@/components/explore/ExploreEmptyState";
import ExploreMapView from "@/components/explore/ExploreMapView";

// hooks imports
import { useExploreSession } from "@/hooks/explore/useExploreSession";

//=========================================================

const Explore = () => {
  const session = useExploreSession();

  //----------------------------------------------------------
  // Condition for Empty State
  if (!session.user?.location && !session.gpsLocation && !session.displayLat) {
    return (
      <ExploreEmptyState
        onGetCurrentLocation={session.getCurrentLocation}
        onSetDefaultLocation={session.handleSetDefaultLocation}
        loading={session.loading}
      />
    );
  }

  return (
    <View className="flex-1">
      {/* Header with Location Selection */}
      <ExploreHeader
        onPress={() => session.setShowFullLocation(true)}
        locationName={session.locationName}
      />

      {/* Floating GPS Button */}
      <ExploreControls
        onRelocate={session.handleRelocating}
        loading={session.loading}
      />

      {/* Core Map Component */}
      <ExploreMapView
        cameraRef={session.cameraRef}
        selectedPoint={session.selectedPoint}
        onMapPress={session.handleMapPress}
        onPropertySelect={session.handlePropertySelect}
      />

      {/* Overlays & Sheets */}
      {session.selectedPlace && (
        <BottomSheetComp
          ref={session.bottomSheetRef}
          snapPoints={["40%"]}
          index={0}
          onClose={() => session.setSelectedPlace(null)}
        >
          <PropertyCard2 {...session.selectedPlace} fullWidth={true} />
        </BottomSheetComp>
      )}

      <LocationFullDetails
        visible={session.showFullLocation}
        onClose={() => session.setShowFullLocation(false)}
        locationName={session.locationName}
      />
    </View>
  );
};

export default Explore;

