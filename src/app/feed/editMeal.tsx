import { FormEdit } from '@/components/forms/formEdit';
import { Header } from '@/components/header';
import { Text, View } from 'react-native';


export default function EditMeal() {
  return (
    <View className={`flex-1 bg-white`}>
      <Header title='Editar refeição'/>
      <View className='flex-1 bg-white rounded-t-3xl'>
        <FormEdit/>
      </View>
    </View>
  );
}