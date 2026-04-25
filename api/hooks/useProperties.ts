// config imports
import { postApi } from "@/api/axios/methods";
import { ENDPOINTS } from "@/api/config/endpoints";
import { QUERY_KEYS } from "@/api/config/queryKeys";
// hooks imports
import { useGetHook, usePostHook } from "./useMethods";
// toast imports
import Toast from "react-native-toast-message";
// query client
import queryClient from "../queryClient";
// types imports
import { Property } from "@/types/type";

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

//================================================================
// PROPERTY DETAILS HOOK

export const usePropertyDetails = (id: string) => {
  const { data, isPending, isSuccess, isError, refetch, isFetched } =
    useGetHook(`${ENDPOINTS.PROPERTIES.PROPERTY}/${id}`, [
      QUERY_KEYS.PROPERTIES.PROPERTY,
      id,
    ]);
  const propertyDetails = data?.data;
  console.log("PROPERTY DETAILS", propertyDetails);

  if (isError) {
    Toast.show({
      type: "error",
      text1: "Error",
      text2: "Failed to fetch Nearby Properties",
    });
  }
  return {
    propertyDetails,
    refetchPropertyDetails: refetch,
    isPropertyDetailsFetched: isFetched,
    isPropertyDetailsPending: isPending,
    isPropertyDetailsSuccess: isSuccess,
    isPropertyDetailsError: isError,
  };
};

//================================================================
// FAVORITE PROPERTIES HOOKS

export const useFetchFavorites = () => {
  const { data, isPending, isSuccess, isError, refetch, isFetched } =
    useGetHook(ENDPOINTS.PROPERTIES.FAVORITES, [
      QUERY_KEYS.PROPERTIES.FAVORITES,
    ]);

  const favorites = data?.data?.properties;

  if (isError) {
    Toast.show({
      type: "error",
      text1: "Error",
      text2: "Failed to fetch Favorite Properties",
    });
  }

  return {
    favorites,
    refreshFavorites: refetch,
    isFavoritesFetched: isFetched,
    isFavoritesPending: isPending,
    isFavoritesSuccess: isSuccess,
    isFavoritesError: isError,
  };
};

//================================================================

export const useAddFavorite = () => {
  return usePostHook(ENDPOINTS.PROPERTIES.FAVORITES, undefined, {
    mutationFn: (variables: { property: Property; action: "add" | "remove" }) =>
      postApi(ENDPOINTS.PROPERTIES.FAVORITES, { id: variables.property._id }),
    onMutate: async ({
      property,
      action,
    }: {
      property: Property;
      action: "add" | "remove";
    }) => {
      // 1. Cancel outgoing refetches
      await queryClient.cancelQueries({
        queryKey: [QUERY_KEYS.PROPERTIES.FAVORITES],
      });

      // 2. Snapshot the previous value
      const previousFavorites = queryClient.getQueryData([
        QUERY_KEYS.PROPERTIES.FAVORITES,
      ]);

      // 3. Optimistically update
      queryClient.setQueryData(
        [QUERY_KEYS.PROPERTIES.FAVORITES],
        (old: any) => {
          const prevProperties = old?.data?.properties ?? [];
          const newProperties =
            action === "add"
              ? [...prevProperties, property]
              : prevProperties.filter((p: Property) => p._id !== property._id);

          return {
            ...old,
            data: { ...old?.data, properties: newProperties },
          };
        },
      );

      return { previousFavorites };
    },
    onError: (err, variables, context: any) => {
      if (context?.previousFavorites) {
        queryClient.setQueryData(
          [QUERY_KEYS.PROPERTIES.FAVORITES],
          context.previousFavorites,
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.PROPERTIES.FAVORITES],
      });
    },
  });
};
