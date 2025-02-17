import { fetchMovies, getMovieById } from '@/api/Movie';
import { useQuery } from '@tanstack/react-query';

const useFetchMovieById = (id: number) => {
  const { data, isFetching, error } = useQuery({
    queryKey: ['movie', { id }],
    queryFn: () => getMovieById(id),
  });

  return { data, isFetching, error };
};

export default useFetchMovieById;
