import axios from "axios";

const ApiClient = axios.create({
  baseURL: "https://vehicle-api-git-main-rbaliwal00.vercel.app/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default ApiClient;