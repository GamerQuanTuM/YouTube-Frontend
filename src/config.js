import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://youtube-backend-sif9.onrender.com/api/",
});
