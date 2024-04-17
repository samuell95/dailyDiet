import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { ScrollView, Text, View } from 'react-native'

import { InputField, InputRoot } from '../input'
import { Button, ButtonText } from '../button'
import { Avatar } from '../avatar'
import { router } from 'expo-router'
import { useState } from 'react'
import { ErrorMessage } from './errorMessage'

const FormSchema = z
  .object({
    name: z.string().nonempty({ message: 'Digite seu nome' }),
    email: z.string().email({ message: 'Digite seu e-mail válido' }),
    password: z.string().nonempty({ message: 'Digite sua senha' }),
    confirmPassword: z
      .string()
      .nonempty({ message: 'Digite a novamente a senha' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Senhas diferentes',
    path: ['confirmPassword'],
  })

type MainFormData = z.infer<typeof FormSchema>

export function FormCreateUser() {
  const [avatarUri, setAvatarUri] = useState('')

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  async function onSubmit(data: MainFormData) {
    console.log(data, avatarUri)
  }

  return (
    <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
      <View className="justify-center items-center mt-3 mb-8">
        <Avatar setAvatarUri={setAvatarUri} />
      </View>
      <Controller
        name="name"
        control={control}
        render={({ field: { onChange, value } }) => (
          <>
            <Text className="text-base text-gray2 font-BOLD">Nome</Text>
            <InputRoot className="w-full h-12 border mt-1 border-gray5 rounded-md">
              <InputField
                className="w-full h-full p-4"
                onChangeText={onChange}
                value={value}
              />
            </InputRoot>
            <ErrorMessage message={errors.name?.message} />
          </>
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, value } }) => (
          <View className="flex-col flex-1">
            <Text className="text-base mt-6 text-gray2 font-BOLD">E-mail</Text>
            <InputRoot className=" h-12 border mt-1 border-gray5 rounded-md">
              <InputField
                className=" p-4"
                keyboardType="email-address"
                onChangeText={onChange}
                value={value}
              />
            </InputRoot>
            <ErrorMessage message={errors.email?.message} />
          </View>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, value } }) => (
          <View className="flex-col flex-1">
            <Text className="text-base mt-6 text-gray2 font-BOLD">Senha</Text>
            <InputRoot className="h-12 border mt-1 border-gray5 rounded-md">
              <InputField
                className=" p-4"
                onChangeText={onChange}
                value={value}
              />
            </InputRoot>
            <ErrorMessage message={errors.password?.message} />
          </View>
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        render={({ field: { onChange, value } }) => (
          <View className="flex-col flex-1">
            <Text className="text-base mt-6 text-gray2 font-BOLD">
              Confirmar senha
            </Text>
            <InputRoot className="h-12 border mt-1 border-gray5 rounded-md">
              <InputField
                className=" p-4"
                onChangeText={onChange}
                value={value}
              />
            </InputRoot>
            <ErrorMessage message={errors.confirmPassword?.message} />
          </View>
        )}
      />

      <View className="mt-16">
        <Button
          className="w-full h-12 bg-gray2 rounded-md items-center justify-center"
          onPress={handleSubmit(onSubmit)}
        >
          <ButtonText className="text-white text-sm font-BOLD">
            Criar conta
          </ButtonText>
        </Button>

        <Button
          className="border-2 border-gray1 rounded-md justify-center items-center mt-9 h-12"
          onPress={() => router.back()}
        >
          <ButtonText>Voltar ao login</ButtonText>
        </Button>
      </View>
    </ScrollView>
  )
}
