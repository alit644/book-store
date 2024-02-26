import axios from "axios";

export const Axios = axios.create({
  baseURL: `https://back-end-strapi-book-store.onrender.com/api`,
});
