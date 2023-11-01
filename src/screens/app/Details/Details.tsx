import React, { useContext } from 'react';
import * as S from './Details.styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppScreensParamList } from '@routes/TypeParamList';

type Props = NativeStackScreenProps<AppScreensParamList, 'details'>

export const Details = ({ route }: Props) => {
  const { description, image } = route.params;

  return (
    <S.Container>
      <S.ImageContainer>  
        <S.Image source={image} />
      </S.ImageContainer>
      <S.Text>{description}</S.Text>
    </S.Container>
  );
};