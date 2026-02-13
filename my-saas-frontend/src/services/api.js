import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // backend
  headers: {
    "Content-Type": "application/json",
  },
});

// نضيف التوكن تلقائيا لو موجود
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;