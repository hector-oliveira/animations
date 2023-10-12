import React from 'react';
import * as S from './Search.styles';
import { Feather } from '@expo/vector-icons';
import { InputTextArea } from '@components/all.components';
import { InputTypesProps } from '@interfaces/Input.props';

export const Search = ({
  onChangeText,
  placeholder,
  icon,
  ...rest
}:InputTypesProps) => {
  return (
    <S.Container>
      <InputTextArea 
        onChangeText={onChangeText}
        placeholder={placeholder}
        {...rest}
      />
      <S.IconContainer>
        <Feather name={icon} size={20} color="#000" />
      </S.IconContainer>
    </S.Container>
  );
};