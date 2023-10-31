import React from 'react';
import * as S from './Button.styles';
import { ButtonProps } from '@interfaces/ButtonProps';

export const Button = ({ placeholder = 'Botão', onChangeText, ...rest}: ButtonProps) => {
  return (
    <S.Container {...rest}>
      <S.Text>{placeholder}</S.Text>
    </S.Container>
  );
};