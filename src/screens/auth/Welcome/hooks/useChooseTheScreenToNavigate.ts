import { AuthRoutesNames } from '@routes/TypeParamList/TypingForNavigation';
import { useNavigation } from '@react-navigation/native';

export const useChooseTheScreenToNavigate = () => {
  
  const navigation = useNavigation<AuthRoutesNames>();
  
  const handleNavigationToLogin = () => navigation.navigate('login');
  
  const handleNavigationToSignUp = () => navigation.navigate('signUp');
  
  const handleNavigationToApp = () => navigation.navigate('app');
  return {
    handleNavigationToLogin,
    handleNavigationToSignUp,
    handleNavigationToApp  
  }
}