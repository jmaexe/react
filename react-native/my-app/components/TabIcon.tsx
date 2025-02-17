import { View, Image, Text } from 'react-native';

type TabIconProps = {
  color?: string;
  className?: string;
  source?: number | { uri: string };
  focused?: boolean;
  name?: string;
};
const TabIcon = ({ color, className, source, focused, name }: TabIconProps) => {
  return (
    <View className="items-center justify-center ">
      <Image
        className={className ? className : 'w-6 h-6'}
        tintColor={color}
        resizeMode="contain"
        source={source}
      />
      <Text
        className={focused ? 'text-sm' : 'text-xs'}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

export default TabIcon;
