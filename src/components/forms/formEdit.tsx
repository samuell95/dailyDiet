import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod';

import { ScrollView, Text, View } from 'react-native';

import { InputField, InputRoot } from '../input';
import { CheckBox } from '../checkbox';
import { useState } from 'react';
import { Button, ButtonText } from '../button';
import { router } from 'expo-router';


const FormSchema = z.object({
  name: z.string(),
  description: z.string(),
  date: z.string(),
  hour: z.string(),
  healthy: z.enum(['SIM', 'NÃO']),
})

type MainFormData = z.infer<typeof FormSchema>

export function FormEdit() {
 const [, setIsYes] = useState(true)
 const [, setIsNo] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      description: "",
      date: "",
      hour: "",
      healthy: "SIM" 
    }
  })


  

  async function onSubmit(data: { name: string; description: string; date: string; hour: string; healthy: string }) {
    console.log(data);

    if(data.healthy === 'SIM'){
      router.push('/newFood/feedBack/healthy')
    } else {
      router.push('/newFood/feedBack/notHealthy')
    }
  }
  

  return (
    <ScrollView className='flex-1'>
    <View className='mt-7 px-6'>
     <Controller
      name='name'
      control={control}
      render={({ field: { onChange, value } }) => (
        <>
        <Text className='text-base text-gray2 font-BOLD'>Nome</Text>
        <InputRoot className='w-full h-12 border mt-1 border-gray5 rounded-md'>
          <InputField 
            className='w-full h-full p-4'
            onChangeText={onChange}
            value={value}
          />
        </InputRoot> 
        </>  
      )}
     />
     <Controller
      name='description'
      control={control}
      render={({ field: { onChange, value } }) => (
        <>
        <Text className='text-base mt-6 text-gray2 font-BOLD'>Descrição</Text>
        <InputRoot className='w-full h-32 border mt-1 border-gray5 rounded-md'>
          <InputField 
            multiline
            textAlignVertical='top'
            className='w-full h-full p-3'
            onChangeText={onChange}
            value={value}
          />
        </InputRoot> 
        </>  
      )}
     />

     <View className='flex-row'>
     <Controller
      name='date'
      control={control}
      render={({ field: { onChange, value } }) => (
        <View className='flex-col flex-1'>
          <Text className='text-base mt-6 text-gray2 font-BOLD'>Data</Text>
          <InputRoot className='h-12 border mt-1 mr-5 border-gray5 rounded-md'>
            <InputField
              className=' p-4'
              onChangeText={onChange}
              value={value}
            />
          </InputRoot> 
         
        </View>  
      )}
     />
     <Controller
      name='hour'
      control={control}
      render={({ field: { onChange, value } }) => (
        <View className='flex-col flex-1'>
          <Text className='text-base mt-6 text-gray2 font-BOLD'>Hora</Text>
          <InputRoot className='h-12 border mt-1 border-gray5 rounded-md'>
            <InputField
              className=' p-4'
              onChangeText={onChange}
              value={value}
            />
          </InputRoot> 
        </View>  
      )}
     />
     </View>

     <Text className='text-base mt-6 text-gray2 font-BOLD'>Está dentro da dieta?</Text>
     <View className='flex-row'>
     <Controller
      name='healthy'
      control={control}
      render={({ field: {value,onChange} }) => (
          <>
            <CheckBox 
              label='Sim'  
              className='mr-2' 
              isHealthy 
              isActive={value === 'SIM'} 
              onPress={()=> 
                {
                  onChange('SIM'), 
                  setIsYes(true)
                  setIsNo(false)
                }
              }
            />
            <CheckBox 
              label='Não' 
              isHealthy={false} 
              isActive={value === 'NÃO'} 
              onPress={()=> 
                {
                  onChange('NÃO'), 
                  setIsNo(true)
                  setIsYes(false)
                }
              }
              />
          </>
      )}
     />
     </View>
    </View>
    <View className='px-6 mt-44'>
      <Button className='w-full h-12 bg-gray2 rounded-md items-center justify-center' 
        onPress={handleSubmit(onSubmit)}
      >
        <ButtonText className='text-white text-sm font-BOLD'>
          Salvar alterações
        </ButtonText>
      </Button>
    </View>
    </ScrollView>
  );
}