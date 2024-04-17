import { TouchableOpacity, TouchableOpacityProps, Text, TextProps } from 'react-native';



export function Button({...rest}: TouchableOpacityProps) {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.7}/>
  );
}

export function ButtonText({...rest}: TextProps) {
  return (
    <Text {...rest} />
  );
}