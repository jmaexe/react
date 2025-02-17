import { fetchMovies } from '@/api/Movie';
import MovieList from '@/components/MovieList';
import { RootStackParamsList } from '@/router';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useQuery } from '@tanstack/react-query';
import { View, Text, StatusBar } from 'react-native';

type HomeScreenProps = NativeStackScreenProps<RootStackParamsList, 'Home'>;
const HomeScreen = ({}: HomeScreenProps) => {
  const { data, isFetching, error } = useQuery({
    queryKey: ['movies'],
    queryFn: () => fetchMovies('en-US', 1),
  });
  return (
    <View style={{ flex: 1 }}>
      {isFetching && <Text>Loading ...</Text>}
      {error && <Text>{error.message}</Text>}
      {data && <MovieList movies={data} />}
    </View>
  );
};

export default HomeScreen;
