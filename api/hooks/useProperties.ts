// confidg imports
import { ENDPOINTS } from "@/api/config/endpoints";
import { QUERY_KEYS } from "@/api/config/queryKeys";
// hooks imports
import { useGetHook } from "./useMethods";
// toast imports
import Toast from "react-native-toast-message";

//================================================================
// RECOMMENDED PROPERTIES HOOK

export const useRecommendedProperties = () => {
  const { data, isPending, isSuccess, isError, refetch, isFetched } =
    useGetHook(ENDPOINTS.PROPERTIES.RECOMMENDED, [
      QUERY_KEYS.PROPERTIES.RECOMMENDED,
    ]);
  const recommendedProperties = data?.data;

  if (isError) {
    Toast.show({
      type: "error",
      text1: "Error",
      text2: "Failed to fetch properties",
    });
  }
  return {
    recommendedProperties,
    refetchRecommendedProperties: refetch,
    isRecommendedPropertiesFetched: isFetched,
    isRecommendedPropertiesPending: isPending,
    isRecommendedPropertiesSuccess: isSuccess,
    isRecommendedPropertiesError: isError,
  };
};

//================================================================
// RECOMMENDED PROPERTIES HOOK

export const usePopularProperties = () => {
  const { data, isPending, isSuccess, isError, refetch, isFetched } =
    useGetHook(ENDPOINTS.PROPERTIES.POPULAR, [QUERY_KEYS.PROPERTIES.POPULAR]);
  const popularProperties = data?.data;

  if (isError) {
    Toast.show({
      type: "error",
      text1: "Error",
      text2: "Failed to fetch properties",
    });
  }
  return {
    popularProperties,
    refetchPopularProperties: refetch,
    isPopularPropertiesFetched: isFetched,
    isPopularPropertiesPending: isPending,
    isPopularPropertiesSuccess: isSuccess,
    isPopularPropertiesError: isError,
  };
};

//================================================================
// Nearby PROPERTIES HOOK

export const useNearbyProperties = (
  longitude: number,
  latitude: number,
  start: number,
  limit: number,
) => {
  const urlQuery = `?longitude=${longitude}&latitude=${latitude}&start=${start}&limit=${limit}`;
  const { data, isPending, isSuccess, isError, refetch, isFetched } =
    useGetHook(`${ENDPOINTS.PROPERTIES.NEARBY}${urlQuery}`, [
      QUERY_KEYS.PROPERTIES.NEARBY,
    ]);
  const nearbyProperties = data?.data;
  console.log("NEARBY DATA", nearbyProperties);

  if (isError) {
    Toast.show({
      type: "error",
      text1: "Error",
      text2: "Failed to fetch Nearby Properties",
    });
  }
  return {
    nearbyProperties,
    refetchNearbyProperties: refetch,
    isNearbyPropertiesFetched: isFetched,
    isNearbyPropertiesPending: isPending,
    isNearbyPropertiesSuccess: isSuccess,
    isNearbyPropertiesError: isError,
  };
};
