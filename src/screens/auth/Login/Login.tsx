import React from 'react';
import * as S from './Login.styles';
import { useNavigation } from '@react-navigation/native';
import { AuthRoutesNames } from '@routes/TypeParamList/TypingForNavigation';
import { TouchableOpacity } from 'react-native';

export const Login = () => {
  return (
    <S.Container>
      <S.Text>Login</S.Text>
    </S.Container>
  );
};
