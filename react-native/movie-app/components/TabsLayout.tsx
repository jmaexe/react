import TabIcon from '@/components/TabIcon';
import { Tabs } from 'expo-router';
import { StatusBar } from 'react-native';
import icons from '../../constants/images';
const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#202020',
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: 'Home',
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              source={icons.home}
              color={color}
              focused={focused}
              name={'Home'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: 'Profile',
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              source={icons.user}
              color={color}
              focused={focused}
              name={'Profile'}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
