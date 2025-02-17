import { ScrollView, View } from 'react-native';
import Movie from './Movie';

type MovieListProps = {
  movies: Movie[];
};
const MovieList = ({ movies }: MovieListProps) => {
  return (
    <ScrollView>
      {movies.map((movie) => (
        <Movie data={movie} key={movie.id} />
      ))}
    </ScrollView>
  );
};

export default MovieList;
