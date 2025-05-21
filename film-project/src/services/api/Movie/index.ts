import { Movie, PopularMovie } from "@/types/Movie";
import axios from "../axios";

export const getPopularMovies = async <T extends Movie>() => {
  const res = await axios.get("movie/popular");
  console.log(res.data.results);
  return res.data.results as T[];
};
