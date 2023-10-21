import React from 'react';
import * as S from './Individual.styles';
import { CheckBoxProps } from '@interfaces/CheckBox.props';
import { useIconRendering, useToggleStatus } from '@hooks/index';
import { theme } from '@themes/theme';

export const Individual = ( {
  options,
  onChange,
  ...rest
}: CheckBoxProps) => {

  const { status, handleToggleStatus } = useToggleStatus(false);
  const { handleIconRendering } = useIconRendering({ 
    initialStatus: status,
    nameIconTrue: 'check',
    nameIconFalse: 'square-o',
    sizeIconFalse: 23,
    sizeIconTrue: 18,
    colorIconTrue: theme.color.light_900,
    colorIconFalse: theme.color.bgContainer,
    bgColorIconTrue: theme.color.check
  });
  
  return (
    <S.Container
      onPress={handleToggleStatus}
      isClicked={status}
      { ...rest }
    >
     { handleIconRendering() }
      {options.map((option, index) => 
        <S.Text key={index}>{option?.text}</S.Text>
      )}
    </S.Container>
  );
};