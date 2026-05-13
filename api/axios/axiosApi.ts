import { storage } from "@/lib/mmkvStorage";
import axios from "axios";

//=========================================
// Base URL
const BASE_URL = "http://192.168.1.8:3000/api";

//=========================================
// Axios Instance

const Environment = process.env.NODE_ENV;

const URL =
  Environment === "development"
    ? process.env.EXPO_PUBLIC_BACKEND_URL_DEV
    : process.env.EXPO_PUBLIC_BACKEND_URL;

const axiosInstance = axios.create({
  baseURL: `${URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

//=========================================
// Request Interceptor

axiosInstance.interceptors.request.use(
  (request) => {
    const token = storage.getString("token");
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

//=========================================
// Response Interceptor

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const errorResponse = error.response?.data || {
      message: error.message || "An unexpected error occurred",
    };
    return Promise.reject(errorResponse);
  },
);

export default axiosInstance;
