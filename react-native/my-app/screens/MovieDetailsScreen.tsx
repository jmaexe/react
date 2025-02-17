import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import { getMovieById } from '@/api/Movie';
import { useQuery } from '@tanstack/react-query';

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  console.log('id:', id);
  const {
    data: movie,
    isFetching,
    error,
  } = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieById(+id),
  });

  return (
    <View>
      {isFetching && <Text>Loading ...</Text>}
      {error && <Text>{error.message}</Text>}
      {movie && <Text>{JSON.stringify(movie)}</Text>}
    </View>
  );
};

export default MovieDetails;
