import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/v0",
  timeout: 1500000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = "Bearer testauth";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
