import { FormCreate } from '@/components/forms/formCreate';
import { Header } from '@/components/header';
import { View } from 'react-native';



export default function NewFood() {
  return (
    <View className='flex-1 bg-gray5'>
     <Header title='Nova refeição'/>
     <View className='flex-1 bg-white rounded-t-3xl'>
      <FormCreate/>
     </View>
    </View>
  );
}