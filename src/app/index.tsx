import { Image, Text, View } from 'react-native'
import { router } from 'expo-router'

import Logo1 from '@/assets/Logo (1).png'

import { InputField, InputRoot } from '@/components/input'
import { Button, ButtonText } from '@/components/button'

export default function SignIn() {
  return (
    <View className="flex-1 items-center px-8">
      <Image
        source={Logo1}
        className="mt-48 h-20 w-40"
        width={200}
        height={200}
        alt=""
      />
      <View className="w-full ">
        <Text className="mt-14">Email</Text>
        <InputRoot className="w-full bg-gray5 rounded-md h-12 mt-2">
          <InputField className="h-12 px-4 placeholder-gray1" />
        </InputRoot>
        <Text className="mt-4">Senha</Text>
        <InputRoot className="w-full bg-gray5 rounded-md h-12 mt-2">
          <InputField className="h-12 px-4 placeholder-gray1" />
        </InputRoot>
      </View>

      <Button className="mt-14 bg-gray1 w-full h-12 items-center justify-center rounded-md">
        <ButtonText className="text-white text-sm font-BOLD">
          Acessar minha conta
        </ButtonText>
      </Button>
      <Button
        className="mt-48 bg-gray7 border-2 border-gray1 w-full h-12 items-center justify-center rounded-md"
        onPress={() => router.push('/SignUp/')}
      >
        <ButtonText
          className="text-black text-sm font-BOLD"
          onPress={() => router.push('/SignUp/')}
        >
          Criar uma conta
        </ButtonText>
      </Button>
    </View>
  )
}
