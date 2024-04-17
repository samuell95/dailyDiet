import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { cn } from '../lib/utils';
import { useEffect, useState } from 'react';



type CheckBoxProps =  TouchableOpacityProps & {
  label: string
  isActive?: boolean
  isHealthy?: boolean
  onChange?: (checked: boolean) => void 
}

export function CheckBox({label, isActive:externalChecked, isHealthy,onChange,...rest}: CheckBoxProps) {
  const [isActive, setIsActive] = useState(false)
  
  useEffect(() => {
    if (externalChecked !== undefined) {
      setIsActive(externalChecked)
    }
  }, [externalChecked])

  const toggleCheckbox = () => {
    const newChecked = !isActive
    setIsActive(newChecked)
    if (onChange) {
      onChange(newChecked) // Notificar a mudança de estado para o componente pai
    }
  }
  return (
    <TouchableOpacity 
    onPress={toggleCheckbox}
    className={cn('flex-1 flex-row space-x-2 h-12 w-full bg-gray6 mt-2 justify-center items-center rounded-md',
     {
        'bg-greenLight border border-greenDark': isActive && isHealthy,
        'bg-redLight border border-redDark': isActive && !isHealthy,
     }
    )}
    activeOpacity={0.7}
    {...rest}
    >
      <View className={`${isHealthy ? 'bg-greenDark' : 'bg-redDark'} w-2 h-2 rounded-full`}/>
      <Text className='font-BOLD text-base'>{label}</Text>
    </TouchableOpacity>
  );
}