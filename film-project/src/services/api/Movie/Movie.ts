import { Movie } from "@/types/Movie";
import axios from "../axios";

export const getPopularMovies = async () => {
  const res = await axios.get("movie/popular");
  console.log(res.data);
  return res.data.results as Movie[];
};
