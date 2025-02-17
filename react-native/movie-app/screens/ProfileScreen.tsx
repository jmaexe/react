import { RootStackParamsList } from '@/router';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

type ProfileScreenProps = NativeStackScreenProps<
  RootStackParamsList,
  'Profile'
>;
const ProfileScreen = ({}: ProfileScreenProps) => {
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
