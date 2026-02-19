// react native imports
import { useCallback, useState } from "react";

// expo exports
import * as ImagePicker from "expo-image-picker";

export const useMediaPicker = () => {
  const [media, setMedia] = useState<ImagePicker.ImagePickerAsset | null>(null);
  const [error, setError] = useState<string | object>("");

  const handleMediaPicker = useCallback(
    async (MediaType: "images" | "videos") => {
      const permission =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permission.granted) {
        setError("Permission to access media library is required");
        return;
      }
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: [MediaType],
        allowsEditing: MediaType === "images" ? true : false,
        quality: 1,
      });

      if (!result.canceled) {
        setMedia(result.assets[0]);
        console.log(result.assets[0]);
      } else {
        setError("You did not select any image.");
      }
    },
    [],
  );

  return { media, setMedia, error, handleMediaPicker };
};
