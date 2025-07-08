import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:7007/api",
});

// Automatically attach the Authorization header if a token is present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
