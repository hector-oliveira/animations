import React from 'react';
import * as S from './Details.styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppParamList } from '@routes/TypesRoutes/app';

type Props = NativeStackScreenProps<AppParamList, 'details'>;

export const Details = ( { route }: Props ) => {
  const { id, image } = route.params;
  
  return (
    <S.Container>
      <S.Text>{id}</S.Text>
      <S.ImageContainer>
        <S.Image>
          {image}
        </S.Image>
      </S.ImageContainer>
    </S.Container>
  );
};