import React, { useState } from 'react';
import * as S from './InputTextArea.styles';
import { InputTextProps } from '@interfaces/InputProps';

export const InputTextArea = ({ onChangeText, placeholder }: InputTextProps) => {
  
  return (
    <S.Container
      onChangeText={onChangeText}
      placeholder={placeholder}
    >
    </S.Container>
  );
};