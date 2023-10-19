import React from 'react';
import * as S from './Individual.styles';
import { CheckBoxProps } from '@interfaces/CheckBox.props';

export const Individual = ( {
  options,
  icon,
  onChange,
  ...rest
}: CheckBoxProps) => {
  return (
    <S.Container>
     { icon && icon()}
      {options.map((option, index) => 
        <S.Text key={index}>{option?.text}</S.Text>
      )}
    </S.Container>
  );
};