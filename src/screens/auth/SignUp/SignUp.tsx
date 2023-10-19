import React, { useState } from 'react';
import * as S from './SignUp.styles';
import { Input } from '@components/Input/Input';
import { useCheckBox } from '@hooks/useCheckBoxIndividual';
import { useSignUp } from './useSignUp';


export const SignUp = () => {
  const acceptanceOption = [{ text: 'Li e concordo com os termos', id: 1 }];
  const { isClicked, handleClick } = useCheckBox();
  const { handleIconRendering } = useSignUp(isClicked);

  return (
    <S.Container>
      <S.Button
        onPress={handleClick}
        isClicked={isClicked}
      >
        <Input.CheckBox.Individual 
          options={acceptanceOption}
          icon={handleIconRendering}
        />
      </S.Button>

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