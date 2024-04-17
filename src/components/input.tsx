import { TextInput, TextInputProps, View, ViewProps } from 'react-native'

export function InputRoot({ ...rest }: ViewProps) {
  return <View {...rest} />
}

export function InputField({ ...rest }: TextInputProps) {
  return <TextInput {...rest} />
}
