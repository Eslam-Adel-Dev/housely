import { useAddFavorite, useFetchFavorites } from "@/api/hooks/useProperties";
import { Property } from "@/types/type";
import { useCallback } from "react";

//================================================================

export const useFavoriteProperties = () => {
  const {
    favorites,
    refreshFavorites,
    isFavoritesFetched,
    isFavoritesPending,
    isFavoritesSuccess,
    isFavoritesError,
  } = useFetchFavorites();

  const { mutate } = useAddFavorite();

  const toggleLike = useCallback(
    async (property: Property, action: "add" | "remove") => {
      mutate({ property, action });
    },
    [mutate],
  );

  return {
    favorites: favorites ?? [],
    refreshFavorites,
    isFavoritesFetched,
    isFavoritesPending,
    isFavoritesSuccess,
    isFavoritesError,
    toggleLike,
  };
};
