import axios from "../axios";

export const getPopularMovies = async () => {
  console.log(import.meta.env.VITE_BASE_URL);
  const res = await axios.get("movie/popular");
  console.log(res);
  return res;
};
