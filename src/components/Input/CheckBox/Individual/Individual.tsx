import React from 'react';
import * as S from './Individual.styles';
import { CheckBoxProps } from '@interfaces/CheckBox.props';

export const Individual = ( {
  options = [],
  onChange
}: CheckBoxProps ) => {
  return (
    <S.Container>
      {options.map((option, index) => 
        <S.Text key={index}>{option?.text}</S.Text>
      )}
    </S.Container>
  );
};