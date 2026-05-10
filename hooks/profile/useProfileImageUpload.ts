import { useEffect } from "react";
import { useMediaPicker } from "@/hooks/useMediaPicker";
import { useUserProfileImage } from "@/api/hooks/useUser";

export const useProfileImageUpload = () => {
  const { media, setMedia, handleMediaPicker } = useMediaPicker();
  const { uploadProfileImage, isPending, isError, isSuccess } = useUserProfileImage();

  useEffect(() => {
    if (!media) return;

    const data = new FormData();
    data.append("profileImage", {
      uri: media.uri,
      name: media.fileName || "profile.jpg",
      type: media.mimeType || "image/jpeg",
    } as unknown as Blob);

    uploadProfileImage(data);
    setMedia(null);
  }, [media, uploadProfileImage, setMedia]);

  return {
    handleImagePick: () => handleMediaPicker("images"),
    isUploading: isPending,
    isError,
    isSuccess,
  };
};
