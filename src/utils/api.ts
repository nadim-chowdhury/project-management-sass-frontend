import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // Replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;


import axios from "axios";

const API_BASE_URL = "https://api.example.com/";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;