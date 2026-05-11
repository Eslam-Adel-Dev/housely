// react native imports
import { RefreshControl, ScrollView, TouchableOpacity } from "react-native";
// components imports
import ScreenWrapper from "@/components/ScreenWrapper";
import SearchComp from "@/components/SearchComp";
import AdSection from "@/components/homeScreen/AdSection";
import LocationFullDetails from "@/components/layout/LocationFullDetails";
import HomeHeader from "@/components/homeScreen/HomeHeader";
import HomeSectionHeader from "@/components/homeScreen/HomeSectionHeader";
import PropertyCardList from "@/components/homeScreen/PropertyCardList";
// images imports
import building from "@/assets/images/building.png";
//hooks imports
import { useHomeSession } from "@/hooks/home/useHomeSession";

//===================================================================

const Index = () => {
  const {
    locationName,
    showFullLocation,
    nearbyRowOne,
    nearbyRowTwo,
    recommendedProperties,
    popularProperties,
    isRefreshing,
    recommendedPending,
    recommendedError,
    popularPending,
    popularError,
    nearbyPending,
    nearbyError,
    onRefresh,
    openExplore,
    openNotifications,
    openChat,
    openSearch,
    openFullLocation,
    closeFullLocation,
    refetchRecommended,
    refetchPopular,
    refetchNearby,
  } = useHomeSession();

  // ui part
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }
    >
      <ScreenWrapper className="bg-[#fcfcfd] gap-8">
        {/* Header section */}
        <HomeHeader
          locationName={locationName}
          onLocationPress={openExplore}
          onLocationLongPress={openFullLocation}
          onNotificationsPress={openNotifications}
          onChatPress={openChat}
        />

        {/* Search trigger */}
        <TouchableOpacity onPress={openSearch}>
          <SearchComp />
        </TouchableOpacity>

        {/* Ad banner */}
        <AdSection
          mainText="GET YOUR 20% CASHBACK"
          subText="*Expired 25 Aug 2022"
          image={building}
        />

        {/* Recommended Properties section */}
        <HomeSectionHeader title="Recommended" />
        <PropertyCardList
          data={recommendedProperties}
          isPending={recommendedPending}
          isError={recommendedError}
          onRetry={refetchRecommended}
        />

        {/* Popular Properties section */}
        <HomeSectionHeader title="Popular Properties" />
        <PropertyCardList
          data={popularProperties}
          isPending={popularPending}
          isError={popularError}
          onRetry={refetchPopular}
        />

        {/* Nearby Properties - Row 1 */}
        <HomeSectionHeader title="Nearby" />
        <PropertyCardList
          variant="small"
          data={nearbyRowOne}
          isPending={nearbyPending}
          isError={nearbyError}
          onRetry={refetchNearby}
        />

        {/* Nearby Properties - Row 2 */}
        <PropertyCardList
          variant="small"
          data={nearbyRowTwo}
          isPending={nearbyPending}
          isError={nearbyError}
          onRetry={refetchNearby}
        />
      </ScreenWrapper>

      <LocationFullDetails
        visible={showFullLocation}
        onClose={closeFullLocation}
        locationName={locationName}
      />
    </ScrollView>
  );
};

export default Index;

//===================================================================

