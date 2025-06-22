// src/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "https://test.easywordsapp.com/api",
});

api.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem("authToken");
    if (token && token !== "undefined" && token.trim() !== "") {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (e) {
    console.warn("Ошибка чтения токена из localStorage:", e);
  }
  return config;
});
export default api;
