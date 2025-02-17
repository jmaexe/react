import getImageMovie from '@/utils/getImageMovie';
import { Link, router } from 'expo-router';
import { Text, ImageBackground, Pressable } from 'react-native';
type MovieProps = {
  data: Movie;
};
const Movie = ({ data }: MovieProps) => {
  const img = getImageMovie(data.backdrop_path, 'w780');
  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: '/Movie/[id]',
          params: { id: data.id },
        })
      }
    >
      <ImageBackground
        source={{ uri: img }}
        resizeMode="cover"
        className="h-fit p-4 flex flex-col gap-2 shadow-2xl border  text-center justify-center"
      >
        <Text className="font-bold text-xl text-white">{data.title}</Text>
      </ImageBackground>
    </Pressable>
  );
};

export default Movie;
