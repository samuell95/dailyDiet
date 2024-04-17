import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'

import { ImageUp, UserRound } from 'lucide-react-native'

import { View, Image, Alert } from 'react-native'
import { useState } from 'react'

import { Button } from './button'

interface AvatarProps {
  setAvatarUri?: (uri: string) => void | undefined
}

export function Avatar({ setAvatarUri }: AvatarProps) {
  const [userPhoto, setUserPhoto] = useState('')

  async function handleUserPhotoSelect() {
    try {
      const photoResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      })

      if (photoResult.canceled) {
        return
      }

      if (photoResult.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(
          photoResult.assets[0].uri,
        )

        if (photoInfo.exists && photoInfo.size / 1024 / 1024 > 5) {
          return Alert.alert(
            'Essa imagem é muito grande. Escolha uma de até 5mb',
          )
        }

        setUserPhoto(photoResult.assets[0].uri)
        if (setAvatarUri) {
          setAvatarUri(photoResult.assets[0].uri)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View className="border-4 bg-gray6  border-greenDark rounded-full w-24 h-24 items-center justify-center">
      {userPhoto ? (
        <Image
          alt=""
          source={{ uri: userPhoto }}
          className="h-24 w-24 rounded-full"
        />
      ) : (
        <UserRound className="text-gray4" size={65} />
      )}
      <Button
        className="left-16 top-16 w-9 h-9 bg-greenDark absolute rounded-full items-center justify-center "
        onPress={handleUserPhotoSelect}
      >
        <ImageUp className="w-5 h-5 text-gray5" />
      </Button>
    </View>
  )
}
