import React, { useState } from 'react';
import * as S from './SignUp.styles';
import { Input } from '@components/Input/index';

export const SignUp = () => {
  return (
    <S.Container>
      <Input.Password />
    </S.Container>
  );
};