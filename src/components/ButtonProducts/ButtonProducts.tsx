import React from 'react';
import * as S from './ButtonProducts.styles';
import { ImageBackgroundProps, TouchableOpacityProps } from 'react-native';

type ImageProps = ImageBackgroundProps;
type ButtonProducts = TouchableOpacityProps & ImageProps;

export const ButtonProducts = ({ ...rest }: ButtonProducts) => {
  return (
    <S.Container
      {...rest}
    >
      <S.ImageContainer>
        <S.Image {...rest} />
      </S.ImageContainer>
    </S.Container>
  );
};