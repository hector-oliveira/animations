import React, { ElementType } from 'react';
import * as S from './Individual.styles';
import { CheckBoxProps } from '@interfaces/CheckBox.props';
import { useCheckBox } from '@hooks/useCheckBoxIndividual';
import { IconProps } from '@interfaces/Icon.props';
import { Feather } from '@expo/vector-icons';

export const Individual = ( {
  options,
  name,
  size = 20,
  onChange
}: CheckBoxProps & IconProps) => {
  const { isClicked, handleClick } = useCheckBox();

  return (
    <S.Container
      onPress={handleClick}
      isClicked={isClicked}
    >
     <Feather 
        name={name}
        size={size}
        color={isClicked ? '#30BB64' : '#000000'}
     /> 
      {options.map((option, index) => 
        <S.Text key={index}>{option?.text}</S.Text>
      )}
    </S.Container>
  );
};