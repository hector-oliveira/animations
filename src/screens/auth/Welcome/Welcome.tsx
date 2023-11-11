import React from 'react';
import * as S from './Welcome.styles';
import { Button } from '@components/Button/Button';
import { useChooseTheScreenToNavigate } from './hooks/useChooseTheScreenToNavigate';

export const Welcome = () => {
  const {
    handleNavigationToApp,
    handleNavigationToLogin,
    handleNavigationToSignUp
  } = useChooseTheScreenToNavigate();
  
  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image source={require('@assets/image/welcome/user.png')} />
      </S.ImageContainer>
      <S.NavigationContainer>
        <S.Title>Welcome</S.Title>
        <Button
          icon="log-in"
          placeholder='LOGIN'
          onPress={handleNavigationToLogin}
        />
        <Button
          icon="arrow-right-circle"
          placeholder='SIGN-UP'
          onPress={handleNavigationToSignUp}
        />
        <Button
          placeholder='App: Home'
          onPress={handleNavigationToApp}
        />
      </S.NavigationContainer>

    </S.Container>
  );
};