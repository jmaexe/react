import { Genre } from "./Genre";

export type Movie = {
  id: number;
  title: string;
  popularity: number;
  release_date: string;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  overview: string;
};

export type PopularMovie = Movie & {
  genre_ids: number[];
};

export type MovieDetails = Movie & {
  budget: number;
  genres: Genre[];
  poster_path: string;
  runtime: number;
  vote_average: number;
  vote_count: number;
};
