import { useNavigation } from "@react-navigation/native";
import { AppRoutesNames } from "@routes/TypeParamList/TypingForNavigation";

export const useScreensNavigation = () => {
  const navigation = useNavigation<AppRoutesNames>();

  const handleNavigation = (id: string, image: string) => {
    navigation.navigate('details', { id, image })
  }
  
  return { handleNavigation }
}