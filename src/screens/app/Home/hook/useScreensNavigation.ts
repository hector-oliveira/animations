import { useNavigation } from "@react-navigation/native";
import { AppRoutesNames } from "@routes/TypeParamList/TypingForNavigation";

export const useScreensNavigation = () => {
  const navigation = useNavigation<AppRoutesNames>();

  const handleNavigation = (image: string, description: string) => {
    navigation.navigate('details', { image, description })
  }
  
  return { handleNavigation }
}