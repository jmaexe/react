export type Movie = {
  id: number;
  title: string;
  popularity: number;
  release_date: string;
  backdrop_path: string;
};

export type MovieDetails = Movie & {
  budget: number;
  genres: { id: number; name: string }[];
  overview: string;
  poster_path: string;
  runtime: number;
  vote_average: number;
  vote_count: number;
};
