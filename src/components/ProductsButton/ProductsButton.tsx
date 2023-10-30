import React from 'react';
import * as S from './ProductsButton.styles';
import { ImageBackgroundProps, TouchableOpacityProps } from 'react-native';

type ImageProps = ImageBackgroundProps;
type ProductsButton = TouchableOpacityProps & ImageProps;

export const ProductsButton = ({ ...rest }: ProductsButton) => {
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