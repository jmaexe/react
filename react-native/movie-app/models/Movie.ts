type MovieFiltered = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type Movie = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: Object;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_country: string | string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  production_companies: Company[];
  production_countries: Country[];
  release_date: string;
  revenue: 0;
  runtime: 102;
  spoken_languages: Language[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
type Language = {
  name: string;
  iso_639_1: string;
  english_name: string;
};
type Country = {
  iso_3166_1: string;
  name: string;
};
type Company = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};
type Genre = {
  id: number;
  name: string;
};
