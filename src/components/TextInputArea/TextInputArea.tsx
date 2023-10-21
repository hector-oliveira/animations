import React from 'react';
import * as S from './TextInputArea.styles';
import { TextInputProps } from 'react-native';

export const TextInputArea = ({ ...rest }: TextInputProps ) => {
  return (
    <S.Container {...rest} />
  );
};