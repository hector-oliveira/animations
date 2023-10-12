import React, { ElementType } from 'react';
import * as S from './Individual.styles';
import { CheckBoxProps } from '@interfaces/CheckBox.props';
import { Feather } from '@expo/vector-icons';
import { useCheckBox } from '@hooks/useCheckBoxIndividual';

export const Individual = ( {
  options,
  onChange
}: CheckBoxProps) => {
  const { isClicked, handleClick } = useCheckBox();

  return (
    <S.Container
      onPress={handleClick}
      isClicked={isClicked}
    >
      <Feather 
        name="check-circle"
        size={20}
        color={ isClicked ? '#FFFFFF' : '#000000' }
        backgroundColor={ isClicked ? '#30DD64' : '#FFFFFF' }
        style={ { borderRadius: 10 } }
      />
      {options.map((option, index) => 
        <S.Text key={index}>{option?.text}</S.Text>
      )}
    </S.Container>
  );
};