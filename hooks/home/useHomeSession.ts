import { useState, useCallback } from "react";
import { useRouter } from "expo-router";
import { useUserStore } from "@/store/userStore";
import useLocationName from "@/hooks/useLocationName";
import {
  useNearbyProperties,
  usePopularProperties,
  useRecommendedProperties,
} from "@/api/hooks/useProperties";

export const useHomeSession = () => {
  const [showFullLocation, setShowFullLocation] = useState(false);
  const { user } = useUserStore();
  const router = useRouter();

  const locationName = useLocationName(
    user?.location?.coordinates?.[1],
    user?.location?.coordinates?.[0]
  );

  // Property Fetches
  const nearby = useNearbyProperties(31.22, 30.05, 0, 10);
  const recommended = useRecommendedProperties();
  const popular = usePopularProperties();

  // Data Slicing
  const nearbyRowOne = nearby.nearbyProperties?.slice(0, 5);
  const nearbyRowTwo = nearby.nearbyProperties?.slice(5, 10);

  // Loading/Refreshing states
  const isRefreshing =
    nearby.isNearbyPropertiesPending ||
    recommended.isRecommendedPropertiesPending ||
    popular.isPopularPropertiesPending;

  const onRefresh = useCallback(() => {
    nearby.refetchNearbyProperties();
    recommended.refetchRecommendedProperties();
    popular.refetchPopularProperties();
  }, [nearby, recommended, popular]);

  // Actions
  const openExplore = () => router.push("/explore");
  const openNotifications = () => router.push("/notifications");
  const openChat = () => router.push("/chat");
  const openSearch = () => router.push("/(AppScreens)/search");
  const openFullLocation = () => setShowFullLocation(true);
  const closeFullLocation = () => setShowFullLocation(false);

  return {
    // Data
    user,
    locationName,
    showFullLocation,
    nearbyRowOne,
    nearbyRowTwo,
    recommendedProperties: recommended.recommendedProperties,
    popularProperties: popular.popularProperties,

    // Status
    isRefreshing,
    recommendedPending: recommended.isRecommendedPropertiesPending,
    recommendedError: recommended.isRecommendedPropertiesError,
    popularPending: popular.isPopularPropertiesPending,
    popularError: popular.isPopularPropertiesError,
    nearbyPending: nearby.isNearbyPropertiesPending,
    nearbyError: nearby.isNearbyPropertiesError,

    // Actions
    onRefresh,
    openExplore,
    openNotifications,
    openChat,
    openSearch,
    openFullLocation,
    closeFullLocation,
    refetchRecommended: recommended.refetchRecommendedProperties,
    refetchPopular: popular.refetchPopularProperties,
    refetchNearby: nearby.refetchNearbyProperties,
  };
};
