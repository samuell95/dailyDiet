import React from 'react'
import { View, Text } from 'react-native'
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils'

type ErrorMessageProps = ViewProps & {
  message: string | undefined
}

export function ErrorMessage({ message, ...rest }: ErrorMessageProps) {
  return (
    <View
      className="w-full"
      style={{ height: message ? undefined : 0 }}
      {...rest}
    >
      <Text className="text-red-600">{message}</Text>
    </View>
  )
}
