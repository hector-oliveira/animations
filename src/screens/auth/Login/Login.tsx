import React from 'react';
import * as S from './Login.styles';
import { useNavigation } from '@react-navigation/native';
import { AuthRoutesNames } from '@routes/TypeParamList/TypingForNavigation';
import { TouchableOpacity } from 'react-native';

export const Login = () => {

  const navigation = useNavigation<AuthRoutesNames>();
  const handleNavigation = () => navigation.navigate('recoverPassword');

  return (
    <S.Container>
      <S.Text>Login</S.Text>
      <TouchableOpacity 
        style={ { 
          width: '100%',
          height: 50,
          backgroundColor: 'blue',
         } }
        onPress={handleNavigation}
      />
    </S.Container>
  );
};
