import { Button, ButtonText } from '@/components/button';
import { Header } from '@/components/header';
import { router } from 'expo-router';
import { PencilLine, Trash2 } from 'lucide-react-native';
import { useState } from 'react';
import { Alert, Text, View } from 'react-native';



export default function Feed() {
  const [isHealthy, setIsHealthy] = useState(true)

  async function handleDeleteMeal() {
    Alert.alert(
      '',
      'Deseja realmente excluir o registro da refeição?',
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Sim,excluir',
          onPress: () => {console.log("Excluído")}
        }
      ]
    )
  } 
  return (
    <View className={`flex-1 ${isHealthy ? 'bg-greenLight' : 'bg-redLight'}`}>
      <Header title='Refeição' className={`${isHealthy ? 'bg-greenLight' : 'bg-redLight'}`}/>
      <View className='flex-1 bg-white rounded-t-3xl px-8'>
        <Text className='mt-10 font-BOLD text-lg text-gray1'>Sanduíche</Text>
        <Text className='font-REGUlAR text-base text-gray1'>Sanduíche de pão integral com atum e salada de alface e tomate</Text>
        <Text className='mt-8 font-BOLD text-sm text-gray1'>Data e hora</Text>
        <Text className='font-REGUlAR text-base text-gray1'>12/08/2022 às 16:00</Text>

        <View 
          className='flex-row px-4 py-2 space-x-3 rounded-full mt-7 w-[145px] h-10 items-center bg-gray6'
        >
          <View className={`${isHealthy ? 'bg-greenDark' : 'bg-redDark'} w-2 h-2 rounded-full`}/>
          {
            isHealthy ? (
              <Text>dentro da dieta</Text>
            ) : 
            (
              <Text>fora da dieta</Text>
            )
          }
        </View>
      </View>

      <View className='px-8 space-y-3 bg-white'>
        <Button className='bg-gray2 h-[50px] rounded-md flex-row items-center justify-center' onPress={() => router.push('/feed/editMeal')}>
          <PencilLine className='text-white mr-3' size={18} strokeWidth='2'/>
          <ButtonText className='text-white text-base font-BOLD'>
            Editar refeição
          </ButtonText>
        </Button>
        <Button className='h-[50px] mb-7 border border-gray1 rounded-md flex-row items-center justify-center' onPress={handleDeleteMeal}>
          <Trash2 className='text-gray1 mr-3' size={18}/>
          <ButtonText className='text-gray1 text-base font-BOLD'>
            Excluir refeição
          </ButtonText>
        </Button>
      </View>
    </View>
  );
}