import { RootStackParamsList } from '@/router';
import getImageMovie from '@/utils/getImageMovie';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, ImageBackground, Pressable, StyleSheet } from 'react-native';

type MovieProps = {
  data: Movie;
  onPress?: (id: number) => void;
};
const Movie = ({ data }: MovieProps) => {
  const img = getImageMovie(data.backdrop_path, 'w780');
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();
  return (
    <Pressable
      onPress={() => navigation.navigate('MovieDetails', { id: data.id })}
    >
      <ImageBackground
        source={{ uri: img }}
        resizeMode="cover"
        style={styles.movie}
      >
        <Text style={styles.title}>{data.title}</Text>
      </ImageBackground>
    </Pressable>
  );
};

export default Movie;

const styles = StyleSheet.create({
  movie: {
    height: 60,
    padding: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    borderColor: 'black',
    borderWidth: 1,
    textAlign: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 25,
  },
});
