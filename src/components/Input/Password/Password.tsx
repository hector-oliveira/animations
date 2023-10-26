import React from 'react';
import * as S from './Password.styles';
import { TextInputArea } from '@components/all-components';
import { FontAwesome } from '@expo/vector-icons';
import { theme } from '@themes/theme';
import { useConditionalIconRender, useToggleState } from '@hooks/index';


export const Password = () => {
  const { isToggle, handleToggleState } = useToggleState(true);
  const { handleIconRendering } = useConditionalIconRender({ 
    initialStatus: isToggle, 
    trueIconName: 'eye-slash', 
    falseIconName: 'eye'
  });
  return (
    <S.Container>
      <FontAwesome  name="lock" size={22} color={ theme.color.dark[900] } />
      <TextInputArea 
        secureTextEntry={isToggle}
        autoCapitalize="none"
        placeholder="Senha"
        placeholderTextColor={ theme.color.dark[900] }
      />
      <S.ButtonContainer onPress={handleToggleState}>
        { handleIconRendering() }
      </S.ButtonContainer>
    </S.Container>
  );
};