import CategoryCard from "@/components/CategoryCard";
import PaginationContainer from "@/components/PaginationContainer";
import { getGenres } from "@/services/api/Genre";
import { Genre } from "@/types/Genre";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const CategoriesSection = () => {
  const [firstGenre, setFirstGenre] = useState(0);
  const [lastGenre, setLastGenre] = useState(4);
  const { data, isLoading, error } = useQuery<Genre[]>({
    queryKey: ["Genres"],
    queryFn: getGenres,
  });
  const handlePageChange = (page: number) => {
    const genrePerPage = 4;
    const newFirstGenre = (page - 1) * genrePerPage;
    setFirstGenre(newFirstGenre);
    setLastGenre(newFirstGenre + genrePerPage);
  };
  return (
    <div className="grid place-items-center" id="categories">
      <div className="container space-y-10">
        <div className="flex flex-row items-center justify-between space-y-4">
          <div>
            <h2 className="font-bold text-3xl text-white">
              Explore our wide variety of categories
            </h2>
            <p>
              Whether you're looking for a correctly to make you laugh, a drama
              to make you think, or a documentary to learn something new{" "}
            </p>
          </div>
          <div>
            {data && (
              <PaginationContainer
                pages={Math.ceil(data.length / 4)}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>
        {/* <div className="w-full flex flex-wrap items-center justify-center gap-4 "> */}
        <div className="w-full max-h-96 grid grid-cols-4  gap-4 overflow-hidden ">
          {isLoading && <p>Loading...</p>}
          {error && <p>Error: {JSON.stringify(error)}</p>}
          {data &&
            data
              .slice(firstGenre, lastGenre)
              .map((genre, i) => (
                <CategoryCard
                  key={genre.id}
                  genre={genre.name}
                  genreId={genre.id}
                  timeout={(i + 1) * 200}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
