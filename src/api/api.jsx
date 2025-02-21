import axios from "axios";

const API_BASE_URL = "https://api.warungkopimbahredjo.com";

const Api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default Api;
