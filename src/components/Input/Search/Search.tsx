import React from 'react';
import * as S from './Search.styles';
import { InputTextProps } from '@interfaces/InputProps';
import { Feather } from '@expo/vector-icons';
import { TextInputArea } from '@components/all-components';

export const Search = ({
  placeholder = "Pesquise aqui...",
  onChangeText,
  ...rest
}:InputTextProps) => {

  return (
    <S.Container>
      <TextInputArea 
        onChangeText={onChangeText}
        placeholder={placeholder}
        {...rest}
      />
      <S.IconContainer>
        <Feather name="search" size={20} color="#000" />
      </S.IconContainer>
    </S.Container>
  );
};