import React from 'react';
import * as S from './Password.styles';
import { TextInputArea } from '@components/all.components';
import { FontAwesome } from '@expo/vector-icons';
import { theme } from '@themes/theme';
import { useToggleStatus } from '@hooks/index';
import { useIconRendering } from '../../../hooks/IconRender/useIconRendering';

export const Password = () => {
  const { status, handleToggleStatus } = useToggleStatus(true);
  const { handleIconRendering } = useIconRendering({ 
    initialStatus: status, 
    nameIconTrue: 'eye-slash', 
    nameIconFalse: 'eye'
  });
  return (
    <S.Container>
      <FontAwesome  name="lock" size={22} color={ theme.color.dark_900 } />
      <TextInputArea 
        secureTextEntry={status}
        autoCapitalize="none"
        placeholder="Senha"
        placeholderTextColor={ theme.color.dark_900 }
      />
      <S.ButtonContainer onPress={handleToggleStatus}>
        { handleIconRendering() }
      </S.ButtonContainer>
    </S.Container>
  );
};