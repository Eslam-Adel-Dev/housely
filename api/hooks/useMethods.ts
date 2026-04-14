import { deleteApi, getApi, postApi, putApi } from "@/api/axios/methods";
import { useMutation, useQuery } from "@tanstack/react-query";
import Toast from "react-native-toast-message";

//============================================================
// Get Request Hook

export const useGetHook = (endpoint: string, queryKey: any, options?: any) => {
  return useQuery({
    queryFn: () => getApi(endpoint, options),
    queryKey: queryKey,
  });
};

//============================================================
// POST Request Hook

export const usePostHook = (endpoint: string, options?: any) => {
  return useMutation({
    mutationFn: (data: any) => postApi(endpoint, data, options),
    onSuccess: (data: any) => {
      console.log(data);
      if (data.message)
        Toast.show({
          type: "success",
          text1: data.message,
        });
    },
    onError: (error: any) => {
      console.log(error);
      Toast.show({
        type: "error",
        text1: error.message,
      });
    },
  });
};

//============================================================
// PUT Request Hook

export const usePutHook = (endpoint: string, options?: any) => {
  return useMutation({
    mutationFn: (data: any) => putApi(endpoint, data, options),
    onSuccess: (data: any) => {
      console.log(data);
      Toast.show({
        type: "success",
        text1: data.message,
      });
    },
    onError: (error: any) => {
      console.log(error);
      Toast.show({
        type: "error",
        text1: error.message,
      });
    },
  });
};

//============================================================
// Delete Request Hook

export const useDeleteHook = (endpoint: string, options?: any) => {
  return useMutation({
    mutationFn: (data: any) => deleteApi(endpoint, options),
    onSuccess: (data: any) => {
      console.log(data);
      Toast.show({
        type: "success",
        text1: data.message,
      });
    },
    onError: (error: any) => {
      console.log(error);
      Toast.show({
        type: "error",
        text1: error.message,
      });
    },
  });
};
