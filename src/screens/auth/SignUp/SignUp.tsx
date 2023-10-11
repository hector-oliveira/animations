import React from 'react';
import * as S from './SignUp.styles';
import { Eye } from '@animations/Eye';
import { Input } from '@components/Input/Input';

export const SignUp = () => {
  return (
    <S.Container>
      <Input.CheckBox />
      <Input.Password />
      <Input.Radio />
      <Input.Search />
      <Input.Text />
    </S.Container>
  );
};