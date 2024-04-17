import { ActivityIndicator, View } from 'react-native';

export function Loading() {
  return (
    <View className='justify-center items-center flex-1 '>
      <ActivityIndicator color='green'/>
    </View>
  );
}