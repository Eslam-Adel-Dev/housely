// react native imports
import { useState } from "react";
import {
  Image,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// icons imports
import chat from "@/assets/icons/Chat.png";
import location from "@/assets/icons/Location.png";
import notification from "@/assets/icons/Notification.png";
// components imports
import ScreenWrapper from "@/components/ScreenWrapper";
import SearchComp from "@/components/SearchComp";
import PropertyCard2Error from "@/components/error/PropertyCard2Error";
import PropertyCardError from "@/components/error/PropertyCardError";
import AdSection from "@/components/homeScreen/AdSection";
import PropertyCard from "@/components/homeScreen/PropertyCard";
import PropertyCard2 from "@/components/homeScreen/PropertyCard2";
import LocationFullDetails from "@/components/layout/LocationFullDetails";
import PropertyCard2Skeleton from "@/components/skeletons/PropertyCard2Skeleton";
import PropertyCardSkeleton from "@/components/skeletons/PropertyCardSkeleton";
// images imports
import building from "@/assets/images/building.png";
// dummy data imports
// context imports
import { useUserContext } from "@/context/userContext";
//hooks imports
import {
  useNearbyProperties,
  usePopularProperties,
  useRecommendedProperties,
} from "@/api/hooks/useProperties";
import useLocationName from "@/hooks/useLocationName";
// expo imports
import { useRouter } from "expo-router";
// flashlist imports
import { Property } from "@/types/type";
import { FlashList } from "@shopify/flash-list";

//===================================================================

const Index = () => {
  // const [selectedFilter, setSelectedFilter] = useState(1);
  const [showFullLocation, setShowFullLocation] = useState(false);
  const { userLocation } = useUserContext();
  const locationName = useLocationName(
    userLocation?.latitude,
    userLocation?.longitude,
  );
  const router = useRouter();
  const {
    nearbyProperties,
    isNearbyPropertiesPending,
    isNearbyPropertiesError,
    refetchNearbyProperties,
  } = useNearbyProperties(31.22, 30.05, 0, 10);
  const {
    recommendedProperties,
    isRecommendedPropertiesPending,
    isRecommendedPropertiesError,
    refetchRecommendedProperties,
  } = useRecommendedProperties();
  const {
    popularProperties,
    isPopularPropertiesPending,
    isPopularPropertiesError,
    refetchPopularProperties,
  } = usePopularProperties();

  const nearbyDataRowOne = nearbyProperties?.slice(0, 5);
  const nearbyDataRowTwo = nearbyProperties?.slice(5, 10);

  // refrech control
  const isRefetching =
    isNearbyPropertiesPending ||
    isRecommendedPropertiesPending ||
    isPopularPropertiesPending;

  const onRefresh = () => {
    refetchNearbyProperties();
    refetchRecommendedProperties();
    refetchPopularProperties();
  };
  //-----------------------------------------------------

  // ui part
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isRefetching} onRefresh={onRefresh} />
      }
    >
      <ScreenWrapper className="bg-[#fcfcfd] gap-8">
        {/* ---------------------------------- */}

        <View className="flex-row items-center justify-between">
          <TouchableOpacity
            className="flex-row items-center gap-2 w-[60%]"
            onPress={() => router.push("/explore")}
            onLongPress={() => setShowFullLocation(true)}
          >
            <Image source={location} className="size-7" resizeMode="contain" />
            <Text className="text-lg font-bold" numberOfLines={1}>
              {locationName || "Select Location"}
            </Text>
          </TouchableOpacity>
          <View className="flex-row items-center gap-2">
            <TouchableOpacity
              className="border border-zinc-300 rounded-full p-3"
              onPress={() => router.push("/notifications")}
            >
              <RedDot />
              <Image source={notification} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity
              className="border border-zinc-300 rounded-full p-3"
              onPress={() => router.push("/chat")}
            >
              <RedDot />
              <Image source={chat} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </View>
        {/* ---------------------------------- */}

        <TouchableOpacity onPress={() => router.push("/(AppScreens)/search")}>
          <SearchComp />
        </TouchableOpacity>
        {/* ---------------------------------- */}

        <AdSection
          mainText="GET YOUR 20% CASHBACK"
          subText="*Expired 25 Aug 2022"
          image={building}
        />
        {/* ---------------------------------- */}

        {/* Recommended Properties */}

        <View className="flex-row items-center justify-between">
          <Text className="text-xl font-bold">Recommended</Text>
          <Text className="text-primary-400 text-md font-semibold">
            See All
          </Text>
        </View>
        {isRecommendedPropertiesPending ? (
          <FlashList
            data={[1, 2, 3]}
            renderItem={() => <PropertyCardSkeleton />}
            horizontal={true}
            keyExtractor={(item) => item.toString()}
            ItemSeparatorComponent={() => <View className="w-4" />}
            showsHorizontalScrollIndicator={false}
          />
        ) : isRecommendedPropertiesError ? (
          <PropertyCardError onRetry={refetchRecommendedProperties} />
        ) : (
          <FlashList
            data={recommendedProperties}
            renderItem={({ item }: { item: Property }) => (
              <PropertyCard {...item} image={item.images?.[0]} />
            )}
            horizontal={true}
            keyExtractor={(item) => item._id.toString()}
            ItemSeparatorComponent={() => <View className="w-4" />}
            showsHorizontalScrollIndicator={false}
          />
        )}
        {/* ---------------------------------- */}

        {/* Popular Properties*/}

        <View className="flex-row items-center justify-between">
          <Text className="text-xl font-bold">Popular Properties</Text>
          <Text className="text-primary-400 text-md font-semibold">
            See All
          </Text>
        </View>
        {isPopularPropertiesPending ? (
          <FlashList
            data={[1, 2, 3]}
            renderItem={() => <PropertyCardSkeleton />}
            horizontal={true}
            keyExtractor={(item) => item.toString()}
            ItemSeparatorComponent={() => <View className="w-4" />}
            showsHorizontalScrollIndicator={false}
          />
        ) : isPopularPropertiesError ? (
          <PropertyCardError onRetry={refetchPopularProperties} />
        ) : (
          <FlashList
            data={popularProperties}
            renderItem={({ item }: { item: Property }) => (
              <PropertyCard {...item} image={item.images?.[0]} />
            )}
            horizontal={true}
            keyExtractor={(item) => item._id.toString()}
            ItemSeparatorComponent={() => <View className="w-4" />}
            showsHorizontalScrollIndicator={false}
          />
        )}
        {/* ---------------------------------- */}

        {/* Nearby Properties */}

        <View className="flex-row items-center justify-between">
          <Text className="text-xl font-bold">Nearby</Text>
          <Text className="text-primary-400 text-md font-semibold">
            See All
          </Text>
        </View>
        {isNearbyPropertiesPending ? (
          <FlashList
            data={[1, 2, 3]}
            renderItem={() => <PropertyCard2Skeleton fullWidth={false} />}
            horizontal={true}
            keyExtractor={(item) => item.toString()}
            ItemSeparatorComponent={() => <View className="w-4" />}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 20 }}
          />
        ) : isNearbyPropertiesError ? (
          <View className="w-full pr-5">
            <PropertyCard2Error fullWidth onRetry={refetchNearbyProperties} />
          </View>
        ) : (
          <FlashList
            data={nearbyDataRowOne}
            renderItem={({ item }: { item: Property }) => (
              <PropertyCard2 {...item} fullWidth={false} />
            )}
            horizontal={true}
            keyExtractor={(item) => item._id.toString()}
            ItemSeparatorComponent={() => <View className="w-4" />}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 20 }}
          />
        )}
        {/* ---------------------------------- */}

        {/* Popular Properties - second row */}

        {isNearbyPropertiesPending ? (
          <FlashList
            data={[1, 2, 3]}
            renderItem={() => <PropertyCard2Skeleton fullWidth={false} />}
            horizontal={true}
            keyExtractor={(item) => item.toString()}
            ItemSeparatorComponent={() => <View className="w-4" />}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 20 }}
          />
        ) : isNearbyPropertiesError ? (
          <View className="w-full pr-5">
            <PropertyCard2Error fullWidth onRetry={refetchNearbyProperties} />
          </View>
        ) : (
          <FlashList
            data={nearbyDataRowTwo}
            renderItem={({ item }: { item: Property }) => (
              <PropertyCard2 {...item} fullWidth={false} />
            )}
            horizontal={true}
            keyExtractor={(item) => item._id.toString()}
            ItemSeparatorComponent={() => <View className="w-4" />}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 20 }}
          />
        )}
      </ScreenWrapper>

      <LocationFullDetails
        visible={showFullLocation}
        onClose={() => setShowFullLocation(false)}
        locationName={locationName}
      />
    </ScrollView>
  );
};

export default Index;

//===================================================================

// Red dot component
const RedDot = () => {
  return (
    <View className="absolute top-0 right-0 bg-red-500 rounded-full size-3"></View>
  );
};
