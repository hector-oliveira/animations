import React from 'react';
import * as S from './Welcome.styles';
import { Button } from '@components/Button/Button';
import { AuthRoutesNames } from '@routes/TypeParamList/TypingForNavigation';
import { useNavigation } from '@react-navigation/native';

export const Welcome = () => {
  const navigation = useNavigation<AuthRoutesNames>();

  const handleNavigationToLogin = () => navigation.navigate('login');
  const handleNavigationToSignUp = () => navigation.navigate('signUp');
  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image source={require('@assets/image/welcome/user.png')} />
      </S.ImageContainer>
      <S.NavigationContainer>
        <S.Title>Welcome</S.Title>
        <Button 
          placeholder='LOGIN'
          onPress={handleNavigationToLogin}
        />
        <Button 
          placeholder='SIGN-UP'
          onPress={handleNavigationToSignUp}
        />
      </S.NavigationContainer>

    </S.Container>
  );
};