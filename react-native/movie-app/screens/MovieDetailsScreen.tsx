import { getMovieById } from '@/api/Movie';
import CastList from '@/components/CastList';
import Movie from '@/components/Movie';
import useFetchMovieById from '@/hooks/useFetchMovieById';
import { RootStackParamsList } from '@/router';
import getImageMovie from '@/utils/getImageMovie';
import { LinearGradient } from 'expo-linear-gradient';
import { Stack } from 'expo-router';
import {
  View,
  Text,
  Image,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';

type MovieDetailsScreenProps = NativeStackScreenProps<
  RootStackParamsList,
  'MovieDetails'
>;

var { width, height } = Dimensions.get('window');
const MovieDetailsScreen = ({ route }: MovieDetailsScreenProps) => {
  const { id } = route.params;
  const { data, error, isFetching } = useFetchMovieById(id);
  const img = data && getImageMovie(data.backdrop_path, 'w780');
  console.log(data);
  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#202020' }}>
        {/* <Text style={{ fontSize: 25 }}>MovieDetailsScreen {id} </Text> */}
        {isFetching && <Text>Loading ...</Text>}
        {error && <Text>{error.message}</Text>}
        {data && (
          <View>
            <View>
              <Image
                source={{ uri: img }}
                style={{ width: width, height: height * 0.5 }}
              />
              <LinearGradient
                colors={[
                  'transparent',
                  'rgba(23,23,23,0.4)',
                  'rgba(23,23,23,1)',
                ]}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '100%',
                }}
              />
            </View>
            <View style={{ marginTop: -45 }}>
              <Text
                style={{ color: 'white', textAlign: 'center', fontSize: 30 }}
              >
                {data.title}
              </Text>
              <Text
                style={{
                  color: 'grey',
                  textAlign: 'center',
                  padding: 5,
                  fontWeight: 'bold',
                }}
              >
                {data.release_date}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
              >
                {data.genres.map((genre) => (
                  <Text
                    style={{ color: 'white', paddingHorizontal: 5 }}
                    key={genre.id}
                  >
                    {genre.name + ' '}
                  </Text>
                ))}
              </View>
              <Text
                style={{
                  color: 'grey',
                  marginVertical: 5,
                  paddingVertical: 5,
                  paddingHorizontal: 15,
                  textAlign: 'justify',
                }}
              >
                {data.overview}
              </Text>
            </View>
            <CastList filmId={id} />
          </View>
        )}
      </View>
    </>
  );
};

export default MovieDetailsScreen;
