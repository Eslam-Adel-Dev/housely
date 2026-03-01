import { useUserContext } from "@/context/userContext";
import { Property } from "@/types/type";
import { useCallback, useMemo } from "react";

const useFavoriteProperties = (property: Property) => {
  const { favorites, setFavorites } = useUserContext();
  const id = property.id;

  const isLiked = useMemo(
    () => favorites.some((likedProperty: Property) => likedProperty.id === id),
    [favorites, id],
  );

  const toggleLike = useCallback(() => {
    setFavorites((prevFavorites: Property[]) => {
      const exists = prevFavorites.some((p) => p.id === id);

      if (exists) return prevFavorites.filter((p) => p.id !== id);

      return [...prevFavorites, property];
    });
  }, [id, setFavorites, property]);

  return { isLiked, toggleLike };
};

export default useFavoriteProperties;
