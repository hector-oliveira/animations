import React from 'react';
import * as S from './Text.styles';
import { FontAwesome } from '@expo/vector-icons';
import { theme } from '@themes/theme';
import { TextInputArea } from '@components/all-components';

export const Text = () => {
  return (
    <S.Container>
      <FontAwesome  name="user" size={22} color={ theme.color.light[900] } />
      <TextInputArea 
        placeholder="Nome"
        placeholderTextColor={ theme.color.light[800] }
      />
    </S.Container>
  );
};