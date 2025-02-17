import HomePage from "@/pages/HomePage";
import MoviesPage from "@/pages/MoviesPage";
import { createBrowserRouter } from "react-router";
import { getPopularMovies } from "../api/Movie/Movie";

export default createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/movies",
    Component: MoviesPage,
    loader: getPopularMovies,

    children: [
      {
        path: ":id",
      },
    ],
  },
]);
