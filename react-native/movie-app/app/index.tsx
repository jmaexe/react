import { RootStackParamsList } from '@/router';
import HomeScreen from '@/screens/HomeScreen';
import MovieDetailsScreen from '@/screens/MovieDetailsScreen';
import ProfileScreen from '@/screens/ProfileScreen';
import {
  NavigationContainer,
  NavigationProp,
  NavigationState,
  RouteProp,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { useNavigation } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  StatusBar,
  Image,
  View,
  Text,
  Touchable,
  TouchableHighlight,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CastDetailsScreen from '@/screens/CastDetailsScreen';

const Stack = createNativeStackNavigator<RootStackParamsList>();
const queryClient = new QueryClient();

type StackScreenOptionsProps = {
  navigation: NavigationProp<RootStackParamsList, 'MovieDetails'>;
  route: RouteProp<RootStackParamsList, 'MovieDetails'>;
  // <
  //   NativeStackNavigationProp<RootStackParamsList, 'MovieDetails'>
  // >;
};
export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar backgroundColor={'red'} />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetailsScreen}
          options={({ route, navigation }: StackScreenOptionsProps) => ({
            title: '',
            headerTransparent: true,
            headerLeft: () => (
              <TouchableHighlight onPress={({}) => navigation.goBack()}>
                <Image
                  style={{ padding: 20, borderRadius: 10 }}
                  source={{
                    uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAACenp7m5ub39/dNTU37+/v29vYdHR0NDQ07OzsbGxtFRUXo6OhJSUk/Pz8TExNtbW1CQkJWVlasrKzc3NzDw8PJyckRERElJSV/f3+kpKSLi4tcXFxkZGTw8PC5ubmTk5PR0dHd3d2CZhPqAAACeUlEQVR4nO3dDW4TMRBAYRuWTRqgbSjlp4UC5f53RAIhSHdIKvDK+M37DlDNyPXOOPauS5EkSZIkSZIkSZIkSZIkSZL0V64/fLy6u/3UO4z17OsPr3sHspL5ov70pXcsq9g8q7+87R3NCubz3xKsu97hrGBXD1z3jqe16cVhgvVN74gaO5iDxAznhyNIe9TMu0WCde4dVEub82WCN72DamlazMFan6OG8GKZ4OXT3kE1NL9aJrglJbgsE7WevewdVUNz8JA5I43gw1bt+0OGlOAUjCArQfocLMtWjTUHo1ZtSxrBqEywCn00B0kJ4lu1id6q4csEvlXDl4mcrRopwRI8RVEJzkEdRM3BsFUjJchv1fAr+mA9aKs2FFu1wUWbL6yHDL5MBK0aakWfslV7R0oQv6IPWzXSCNqqDc/Nl8GFrRopQf6KPuXmC+lfFF8molbtPeklg6hM1JvbJyP4PD0iwU1Q6Ady+lWIaA4O5erU2c+73hH+s/3xBO97x9fA/dEM96f/wH/v+CBe9g6vge3RDHtH10TyMeTPQ/6zlF8PE/Q0/L40wdoiwfowwRo/we80hf9bW4bfS+NXJ1n/qPh9i8Lfe8pRNILSj9oDLvwjl2mLBuo8zR9eSGeliD/XlmMu0s+X5mjg8Af4UjRw9EN8JVz10x43CYoG/d21BIfaS9pVPyzFnA0c7UdGGzgA/LdNits2CGEDx0oxw6o/aQPHGsUEDVyGbRsbOAD8d4RLhgYuPJTyuONzo8B/kz3Bd/XDosG6GyHB/RYJ7igpiwbua+942uPfFcS/7ynBnV2Ff+9aSXB3niRJkiRJkiRJkiRJkiRJkjSCb7h/JqHMZdubAAAAAElFTkSuQmCC',
                    width: 25,
                    height: 25,
                  }}
                />
              </TouchableHighlight>
            ),
          })}
        />

        <Stack.Screen
          name="CastDetails"
          component={CastDetailsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </QueryClientProvider>
  );
}
