
import {Slot} from 'expo-router'
import {useFonts, NunitoSans_700Bold, NunitoSans_400Regular} from '@expo-google-fonts/nunito-sans'
import { Loading } from '../components/loading'

export default function Layout() {
  const [fontsLoaded] = useFonts({
    NunitoSans_700Bold, 
    NunitoSans_400Regular
  })
  if(!fontsLoaded) {
    return <Loading/>
  }
  return <Slot/>    
}