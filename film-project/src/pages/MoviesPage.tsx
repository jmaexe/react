import { Movie } from "@/types/Movie";
import { useLoaderData } from "react-router";

const MoviesPage = () => {
  const movies = useLoaderData();
  return (
    <>
      <p>{JSON.stringify(movies)}</p>
    </>
  );
};

export default MoviesPage;
