import { Text, View } from 'react-native';
import { Button } from './button';

type DayListProps = {
  food: string
  isHealthy: boolean
  date: string
  onPress: () => void
}

export function DayList({food, isHealthy,date,onPress}: DayListProps) {
  return (
    <Button 
      className='mb-2 w-full h-[49px] rounded-md flex-row items-center mt-2 py-3 pr-4 pl-3 border border-gray4' 
      onPress={onPress}> 
      <Text className='text-gray1 font-BOLD'>{date}</Text>
      <View className='h-4 w-px bg-gray4 mx-3'/>
      <Text className='flex-1 font-REGUlAR text-gray2 text-base'>{food}</Text>
      <View className={`${isHealthy ? 'bg-greenMid' : 'bg-redMid'} w-4 h-4 rounded-full`}/>
    </Button>
 
  );
}