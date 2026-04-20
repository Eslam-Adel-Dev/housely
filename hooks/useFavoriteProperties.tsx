// context imports
import { useUserContext } from "@/context/userContext";
// types imports
import { Properties, Property } from "@/types/type";
// react imports
import { useCallback, useMemo } from "react";
// toast imports
import Toast from "react-native-toast-message";

const useFavoriteProperties = (property: Property) => {
  const { favorites, setFavorites } = useUserContext();
  const id = property?._id;

  const isLiked = useMemo(
    () => favorites.some((likedProperty: Property) => likedProperty._id === id),
    [favorites, id],
  );

  const toggleLike = useCallback(() => {
    setFavorites((prevFavorites: Properties) => {
      const exists = prevFavorites?.some((p: Property) => p._id === id);

      if (exists) {
        Toast.show({
          type: "info",
          text1: "Removed from favorites",
          text2: "Property has been removed from your favorites.",
        });
        return prevFavorites?.filter((p) => p._id !== id);
      }

      Toast.show({
        type: "success",
        text1: "Added to favorites ❤️",
        text2: "Property has been saved to your favorites.",
      });
      return [...prevFavorites, property];
    });
  }, [id, setFavorites, property]);

  return { isLiked, toggleLike };
};

export default useFavoriteProperties;
