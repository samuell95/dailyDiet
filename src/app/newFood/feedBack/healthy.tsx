import { Text, View } from 'react-native'
import Nice from "@/assets/Illustration.svg"
import { Button, ButtonText } from '@/components/button';
import { router } from 'expo-router';

export default function Healthy() {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='text-greenDark text-3xl font-BOLD mb-2'>
        Continue assim!
      </Text>
      <Text className='text-gray1 text-lg font-REGUlAR mb-10'>
        Você continua <Text className='text-gray1 text-lg font-BOLD'>dentro da dieta.</Text> Muito bem!
      </Text>
      <Nice/>
      <Button className='mt-10 w-48 h-12 rounded-md bg-gray2 items-center justify-center' onPress={() => router.push('/')}>
        <ButtonText className='font-BOLD text-sm text-white'>
          Ir para a página inicial
        </ButtonText>
      </Button>
    </View>
  );
}