import { useUserStore } from "@/store/userStore";
import { ENDPOINTS } from "../config/endpoints";
import { usePatchHook } from "./useMethods";

//================================================================


export const useUserProfileImage = () => {
  const { updateUser } = useUserStore();
  const { mutate, isPending, isError, isSuccess } = usePatchHook(
    ENDPOINTS.USER.PROFILE_IMAGE,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  const uploadProfileImage = (data: any) => {
    mutate(data, {
      onSuccess: (data) => {
        console.log("USER PROFILE IMAGE", data);
        updateUser(data?.data);
      },
      onError: (error) => {
        console.log("USER PROFILE IMAGE ERROR", error);
      },
    });
  };

  return { uploadProfileImage, isPending, isError, isSuccess };
};

//================================================================

export const useUpdateUserProfile = () => {
  const { updateUser } = useUserStore();
  const { mutate, isPending, isError, isSuccess } = usePatchHook(
    ENDPOINTS.USER.PROFILE,
  );

  const updateProfile = (data: any) => {
    mutate(data, {
      onSuccess: (data) => {
        console.log("USER PROFILE", data);
        updateUser(data?.data);
      },
      onError: (error) => {
        console.log("USER PROFILE ERROR", error);
      },
    });
  };

  return { updateProfile, isPending, isError, isSuccess };
};
