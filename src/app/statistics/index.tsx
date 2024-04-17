import { router } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { useState } from 'react';
import { Text, View } from 'react-native';


export default function Statistics() {
  const [isHealthy, setIsHealthy] = useState(0)
  return (
    <>
    <View className={`w-full px-6 pb-10 h-52 flex-row items-end ${isHealthy >= 50 ? 'bg-greenLight' : 'bg-redLight'}`}>
      <ArrowLeft 
        className={`${isHealthy >= 50 ? 'text-greenDark' : 'text-redDark'} mb-16`}
        size={30} 
        onPress={() => router.back()}
      />
      <Text className='flex-1 text-center text-3xl text-gray1 font-BOLD'>{isHealthy}% {'\n'}
        <Text className='font-REGUlAR text-base text-gray2'>das refeições dentro da dieta</Text>
      </Text>
    </View>

    <View className='flex-1 px-6'>
      <Text className='mt-10 text-center text-base font-BOLD '>
        Estatísticas gerais
      </Text>

      <View 
        className='mt-7 w-full h-28 space-y-2 bg-gray6 rounded-lg p-4 items-center justify-center'>
        <Text>22</Text>
        <Text>melhor sequência de pratos dentro da dieta</Text>
      </View>

      <View 
        className='mt-4 w-full h-28 space-y-2 bg-gray6 rounded-lg p-4 items-center justify-center'>
        <Text>109</Text>
        <Text>refeições registradas</Text>
      </View>

      <View className='flex-row space-x-5 justify-center'>
      <View 
        className='mt-4 w-[170px] h-28 space-y-2 bg-greenLight rounded-lg p-4 items-center justify-center'>
        <Text  className='text-gray1 text-lg font-BOLD'>109</Text>
        <Text className='text-center text-sm  font-REGUlAR'>refeições dentro da {'\n'}dieta</Text>
      </View>
      <View 
        className='mt-4 w-[170px] h-28 space-y-2 bg-redLight rounded-lg p-4 items-center justify-center'>
        <Text className='text-gray1 text-lg font-BOLD'>109</Text>
        <Text className='text-center text-sm  font-REGUlAR'>refeições fora da{'\n'} dieta</Text>
      </View>
      </View>
    </View>
    </>
  );
}