import { AxiosRequestConfig } from "axios";
import axiosInstance from "./axiosApi";

//=========================================
// GET request
export const getApi = async (url: string, options?: AxiosRequestConfig) => {
  try {
    const response = await axiosInstance.get(url, options);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

//=========================================
// POST request

export const postApi = async (
  url: string,
  data: any,
  options?: AxiosRequestConfig,
) => {
  try {
    const response = await axiosInstance.post(url, data, options);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

//=========================================
// PUT request

export const putApi = async (
  url: string,
  data: any,
  options?: AxiosRequestConfig,
) => {
  try {
    const response = await axiosInstance.put(url, data, options);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

//=========================================
// DELETE request

export const deleteApi = async (url: string, options?: AxiosRequestConfig) => {
  try {
    const response = await axiosInstance.delete(url, options);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

//=========================================
// PATCH request

export const patchApi = async (
  url: string,
  data: any,
  options?: AxiosRequestConfig,
) => {
  try {
    const response = await axiosInstance.patch(url, data, options);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
