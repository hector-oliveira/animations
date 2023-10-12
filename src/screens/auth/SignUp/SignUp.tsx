import React, { useState } from 'react';
import * as S from './SignUp.styles';
import { Input } from '@components/Input/Input';

export const SignUp = () => {
  const acceptanceOption = [{ text: 'Li e concordo com os termos', id: 1 }];
  return (
    <S.Container>
      <Input.CheckBox.Individual 
        options={acceptanceOption}
      />
      <Input.CheckBox.OnlyOptions />
      <Input.CheckBox.MultipleOptions />
      {/* <Input.Password />
      <Input.Radio />
      <Input.Search 
        onChangeText={handleTextInput}
        value={textInput}
        placeholder='Pesquise aqui'
        icon='search'
      />
      <Input.Text /> */}
    </S.Container>
  );
};