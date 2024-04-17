import { FlatList, Image, Text, View} from 'react-native'
import logo from "@/assets/Logo.png"
import { Avatar } from '@/components/avatar'
import { ArrowUpRight, Plus } from 'lucide-react-native'
import { Button, ButtonText } from '@/components/button'
import { DayList } from '@/components/dayList'
import { useState } from 'react'
import { router } from 'expo-router'

export default function Home() {
  const [food, setFood] = useState([
    {id:'1',food: "X-tudo", date: "8:00",isHealthy: false },
    {id:'2',food: "Salada", date: '12:00',isHealthy: true},
  ])
  return (
  <View className='flex-1 bg-zinc-200 px-6'>
    <View className='flex-row mt-16 justify-between'>
     <Image source={logo} width={100} height={100}/>
     <Avatar/>
    </View>

    <Button className='mt-8 mb-10 w-full h-28 items-center justify-center bg-greenLight rounded-md' onPress={() => router.push('/statistics/')}>
      <ArrowUpRight className='text-greenDark absolute right-4 top-4' size={24}/>
      <Text className='text-gray1 text-4xl font-bold'>90,86%</Text>
      <Text className='text-gray2'>das refeições dentro da dieta</Text>
    </Button>

    <Text className='font-REGUlAR text-gray1 text-base'>Refeições</Text>

    <Button className='flex-row space-x-3 mt-4 mb-8 w-full h-[50px] bg-gray2 items-center justify-center rounded-md' onPress={() => router.push('/newFood/')}>
      <Plus className='text-white' size={20}/> 
      <ButtonText className='text-white font-BOLD text-base'>
        Nova refeição
      </ButtonText>
    </Button>

    <Text className='font-BOLD text-gray1 text-xl'>12.08.22</Text> 
    <FlatList 
     data={food}
     keyExtractor={(item) => item.id}
     renderItem={({ item }) => (
      <DayList food={item.food} isHealthy={item.isHealthy} date={item.date} onPress={() => router.push(`/feed/${item.id}`)}/>
     )}
    />
  </View>
  )
}