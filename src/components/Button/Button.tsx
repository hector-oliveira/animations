import React from 'react';
import * as S from './Button.styles';
import { ButtonProps } from '@interfaces/ButtonProps';

export const Button = ({ placeholder = 'Botão', icon, onPress, ...rest}: ButtonProps) => {
  return (
    <S.Container onPress={onPress} {...rest}>
      { icon && <S.Icon name={icon} size={20} color='#FFF' />}
      <S.Text>{placeholder}</S.Text>
    </S.Container>
  );
};