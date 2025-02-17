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
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={{ width: 6, height: 6 }}
        tintColor={color}
        resizeMode="contain"
        source={source}
      />
      <Text style={{ color: color }}>{name}</Text>
    </View>
  );
};

export default TabIcon;
