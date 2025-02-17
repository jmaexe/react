import { View, Text } from 'react-native';
import React from 'react';
import { fetchMovies } from '@/api/Movie';
import MovieList from '@/components/MovieList';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'expo-router';
const Home = () => {
  const { data, isFetching, error } = useQuery({
    queryKey: ['movies'],
    queryFn: () => fetchMovies('en-US', 1),
  });
  return (
    <View className="flex-1 ">
      <Link href={'/_sitemap'}>click</Link>

      {isFetching && <Text>Loading ...</Text>}
      {error && <Text>{error.message}</Text>}
      {data && <MovieList movies={data} />}
    </View>
  );
};

export default Home;
