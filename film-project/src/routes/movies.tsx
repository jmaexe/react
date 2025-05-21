import MovieCard from "@/components/MovieCard";
import MoviesPageFooter from "@/page-components/MoviesPage/Footer";
import MoviesPageHeader from "@/page-components/MoviesPage/Header";
import { getPopularMovies } from "@/services/api/Movie";
import { Movie } from "@/types/Movie";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/movies")({
  component: RouteComponent,
  loader: () => getPopularMovies(),
});

function RouteComponent() {
  const movies: Movie[] = Route.useLoaderData();
  return (
    <div className="flex flex-col space-y-6 h-screen">
      <MoviesPageHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
        {movies.map((movie) => (
          <MovieCard data={movie} key={movie.id} />
        ))}
      </div>
      <MoviesPageFooter />
    </div>
  );
}
