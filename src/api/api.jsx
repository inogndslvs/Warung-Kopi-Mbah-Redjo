import axios from "axios";

const API_BASE_URL = "https://api.warungkopimbahredjo.com"; // Ganti dengan base URL API

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
