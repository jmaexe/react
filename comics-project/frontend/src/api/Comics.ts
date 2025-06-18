import { api } from "../api/axios.ts";
import { Comic } from "../models/Comics.ts";
export const fetchComics = async (): Promise<Comic[]> => {
  const response = await api.get("/comics");
  console.log(response.data);
  return response.data;
};
