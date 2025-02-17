import { FlatList, ScrollView, View } from 'react-native';
import Movie from './Movie';
import { RootStackParamsList } from '@/router';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type MovieListProps = {
  movies: Movie[];
};
const MovieList = ({ movies }: MovieListProps) => {
  // const navigation =
  //   useNavigation<NativeStackNavigationProp<RootStackParamsList, 'Home'>>();
  // const handleNavigateMovie = (id: number) =>
  //   navigation.navigate('MovieDetails', { id: id });
  return (
    <FlatList
      data={movies}
      keyExtractor={(movie) => movie.id.toString()}
      renderItem={({ item: movie }) => <Movie data={movie} key={movie.id} />}
    />
  );
};

export default MovieList;
