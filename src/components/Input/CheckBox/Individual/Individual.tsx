import React from 'react';
import * as S from './Individual.styles';
import { useConditionalIconRender, useToggleStatus } from '@hooks/index';
import { theme } from '@themes/theme';
import { CheckBoxProps } from '@interfaces/CheckBoxProps';


export const Individual = ( {
  options,
  onChange,
  ...rest
}: CheckBoxProps) => {

  const { status, handleToggleStatus } = useToggleStatus(false);
  const { handleIconRendering } = useConditionalIconRender({ 
    initialStatus: status,
    trueIconName: 'check',
    falseIconName: 'square-o',
    trueIconSize: 18,
    falseIconSize: 23,
    trueIconColor: theme.color.light_900,
    falseIconColor: theme.color.bgContainer,
    trueIconBackgroundColor: theme.color.check
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