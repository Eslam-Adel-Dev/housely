import { deleteApi, getApi, postApi, putApi } from "@/api/axios/methods";
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import Toast from "react-native-toast-message";

//============================================================
// Get Request Hook

export const useGetHook = (
  endpoint: string,
  queryKey: any,
  axiosOptions?: any,
  queryOptions?: UseQueryOptions<any, any, any, any>,
) => {
  return useQuery({
    queryFn: () => getApi(endpoint, axiosOptions),
    queryKey: queryKey,
    enabled: true,
    ...queryOptions,
  });
};

//============================================================
// POST Request Hook

export const usePostHook = (
  endpoint: string,
  axiosOptions?: any,
  mutationOptions?: UseMutationOptions<any, any, any, any>,
) => {
  return useMutation({
    mutationFn: (data: any) => postApi(endpoint, data, axiosOptions),
    ...mutationOptions,
    onSuccess: (data: any, variables: any, context: any) => {
      if (data.message)
        Toast.show({
          type: "success",
          text1: data.message,
        });

      if (mutationOptions?.onSuccess) {
        mutationOptions.onSuccess(data, variables, context);
      }
    },
    onError: (error: any, variables: any, context: any) => {
      Toast.show({
        type: "error",
        text1: error.message,
      });
      if (mutationOptions?.onError) {
        mutationOptions.onError(error, variables, context);
      }
    },
  });
};

//============================================================
// PUT Request Hook

export const usePutHook = (
  endpoint: string,
  axiosOptions?: any,
  mutationOptions?: UseMutationOptions<any, any, any, any>,
) => {
  return useMutation({
    mutationFn: (data: any) => putApi(endpoint, data, axiosOptions),
    ...mutationOptions,
    onSuccess: (data: any, variables: any, context: any) => {
      if (data.message) {
        Toast.show({
          type: "success",
          text1: data.message,
        });
      }
      if (mutationOptions?.onSuccess) {
        mutationOptions.onSuccess(data);
      }
    },
    onError: (error: any, variables: any, context: any) => {
      Toast.show({
        type: "error",
        text1: error.message,
      });
      if (mutationOptions?.onError) {
        mutationOptions.onError(error, variables, context);
      }
    },
  });
};

//============================================================
// Delete Request Hook

export const useDeleteHook = (
  endpoint: string,
  axiosOptions?: any,
  mutationOptions?: UseMutationOptions<any, any, any, any>,
) => {
  return useMutation({
    mutationFn: (data: any) => deleteApi(endpoint, axiosOptions),
    ...mutationOptions,
    onSuccess: (data: any, variables: any, context: any) => {
      if (data.message) {
        Toast.show({
          type: "success",
          text1: data.message,
        });
      }
      if (mutationOptions?.onSuccess) {
        mutationOptions.onSuccess(data, variables, context);
      }
    },
    onError: (error: any, variables: any, context: any) => {
      Toast.show({
        type: "error",
        text1: error.message,
      });
      if (mutationOptions?.onError) {
        mutationOptions.onError(error, variables, context);
      }
    },
  });
};
