import axios from "axios";

const TOKEN = "9d084764-d47f-4bc3-8de9-580353577763";
const BACKEND_URL = "https://api.real-estate-manager.redberryinternship.ge/api";

export const useAxios = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const useAuthAxios = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
});

export const useAuthFileAxios = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${TOKEN}`,
  },
});
