import { router } from 'expo-router'
import { ArrowLeft } from 'lucide-react-native'
import { View, Text, ViewProps } from 'react-native'

type HeaderProps = ViewProps & { title: string }

export function Header({ title, ...rest }: HeaderProps) {
  return (
    <View
      className="flex-row items-end bg-gray5 h-32 pl-6 pb-6 pr-12"
      {...rest}
    >
      <ArrowLeft
        className="text-gray1"
        size={30}
        onPress={() => router.back()}
      />
      <Text className="flex-1 text-center font-BOLD text-2xl">{title}</Text>
    </View>
  )
}
