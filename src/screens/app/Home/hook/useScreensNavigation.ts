import { useNavigation } from "@react-navigation/native";
import { AppScreensParamList } from "@routes/TypeParamList";
import { AppRoutesNames } from "@routes/TypeParamList/TypingForNavigation";

export const useScreensNavigation = () => {
  const navigation = useNavigation<AppRoutesNames>();

  const handleNavigation = ({ description, image, price }: AppScreensParamList['details']) => {
    navigation.navigate('details', { image, description, price });
  }
  
  return { handleNavigation }
}