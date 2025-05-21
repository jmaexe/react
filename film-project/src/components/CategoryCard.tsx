import { getPosterImage } from "@/services/api/Img";
import { getPopularMovies } from "@/services/api/Movie";
import { PopularMovie } from "@/types/Movie";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Faefa from "./Faefa";
import PosterImagePerGenre from "./PosterImagePerGenre";
import ShadowCard from "./ShadowCard";
import { Card, CardContent, CardFooter } from "./ui/card";

const CategoryCard = ({
  genre,
  genreId,
  timeout,
}: {
  genre: string;
  genreId: number;
  timeout: number;
}) => {
  const [opacity, setOpacity] = useState(0);
  const { data, isLoading, error } = useQuery({
    queryKey: ["popularMoviesPerGenre"],
    // queryFn: getPopularMovies<PopularMovie>,
    queryFn: getPopularMovies<PopularMovie>,
  });

  useEffect(() => {
    setTimeout(() => {
      setOpacity(100);
    }, timeout);
  }, []);

  const movies = useMemo(() => {
    return data?.filter((movie) => movie.genre_ids.includes(genreId));
  }, []);
  return (
    <>
      {movies?.length != 0 && (
        <Card
          className={`w-full bg-secondary-foreground transition-opacity opacity-${opacity} duration-500 grid place-items-center`}
        >
          <CardContent className="w-80 grid grid-cols-2 gap-2 pt-6 pb-2 relative ">
            {/* TODO: reusable shadow */}
            <div className="w-full h-full absolute bottom-0 left-0 bg-gradient-to-t from-secondary-foreground from-0% via-40% via-transparent to-transparent "></div>
            {movies &&
              movies.slice(0, 4).map((movie) => (
                <div className="rounded-lg aspect-square ">
                  <PosterImagePerGenre id={movie.backdrop_path} />
                </div>
              ))}
          </CardContent>
          <CardFooter className=" justify-between py-2 px-6">
            <h3>{genre}</h3>
            <FaArrowRight />
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default CategoryCard;
