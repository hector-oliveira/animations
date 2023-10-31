import React from 'react';
import * as S from './Password.styles';
import { TextInputArea } from '@components/all-components';
import { FontAwesome } from '@expo/vector-icons';
import { theme } from '@themes/theme';
import {
  useConditionalIconRender,
  useToggleState
} from '@hooks/index';
import { Eye } from '@animations/Eye';


export const Password = () => {
  const { isToggle, handleToggleState } = useToggleState(true);
  const { handleIconRendering } = useConditionalIconRender({ 
    initialStatus: isToggle, 
    trueIconName: 'eye-slash', 
    falseIconName: 'eye'
  });
  
  return (
    <S.Container>
      <S.IconContainer>
        <FontAwesome name='lock' size={20} color={ theme.color.dark[800] } />
      </S.IconContainer>
      <TextInputArea 
        secureTextEntry={isToggle}
        autoCapitalize="none"
        placeholder="Senha"
      />
      <S.ButtonIconContainer onPress={handleToggleState}>
        { handleIconRendering() }
      </S.ButtonIconContainer>
    </S.Container>
  );
};