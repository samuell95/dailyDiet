import { FormCreateUser } from '@/components/forms/formCreateUser'
import { Text, View } from 'react-native'

export default function SignUp() {
  return (
    <View className="flex-1">
      <View className="flex-row items-end bg-gray5 h-28 pb-6">
        <Text className="flex-1 text-center text-2xl text-gray1 font-BOLD">
          Cadastre-se
        </Text>
      </View>
      <View className="flex-1 justify-center px-8">
        <FormCreateUser />
      </View>
    </View>
  )
}
