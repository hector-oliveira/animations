import React from 'react';
import * as S from './Search.styles';
import { Feather } from '@expo/vector-icons';
import { InputTextArea } from '@components/all.components';

export const Search = () => {
  return (
    <S.Container>
      <InputTextArea />
      <S.IconContainer>
        <Feather 
          name='search'
          size={20}
          color='#3D3D3D'
        />
      </S.IconContainer>
    </S.Container>
  );
};