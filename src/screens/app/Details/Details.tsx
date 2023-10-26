import React, { useContext } from 'react';
import * as S from './Details.styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppScreensParamList } from '@routes/TypeParamList';
import { useRoute } from '@react-navigation/native';
import { AppRoutesNames } from '@routes/TypeParamList/TypingForNavigation';

type Props = NativeStackScreenProps<AppScreensParamList, 'details'>

export const Details = ({ route }: Props) => {
  const { id, image } = route.params;
  
  return (
    <S.Container>
      <S.Text>{id}</S.Text>
      <S.ImageContainer>
        <S.Image>{image}</S.Image>
      </S.ImageContainer>
    </S.Container>
  );
};