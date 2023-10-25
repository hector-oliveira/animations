import { useNavigation } from '@react-navigation/native';
import { AppNavigationContextProperty } from '@routes/TypesRoutes/NavigationProps';

export const useScreensNavigation = () => {
  const navigation = useNavigation<AppNavigationContextProperty>();
  const handleNavigation = (id: string, image: string) => {
    navigation.navigate('details', { id, image });
  }
  return {
    navigation,
    handleNavigation
  }
}