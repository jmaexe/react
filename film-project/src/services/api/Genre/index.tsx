import { Genre } from "@/types/Genre";
import axios from "../axios";

export const getGenres = async () => {
  const res = await axios.get("genre/movie/list");
  console.log(res.data);
  return res.data.genres as Genre[];
};
