import React, { useState } from 'react';
import * as S from './SignUp.styles';
import { Input } from '@components/Input/Input';
import { useTextInput } from '@hooks/useTextInput';

export const SignUp = () => {
  const { textInput, handleTextInput } = useTextInput();
  return (
    <S.Container>
      <Input.CheckBox />
      <Input.Password />
      <Input.Radio />
      <Input.Search 
        onChangeText={handleTextInput}
        value={textInput}
        placeholder='Pesquise aqui'
        icon='search'
      />
      <Input.Text />
    </S.Container>
  );
};