import React, { useState } from 'react';
import * as S from './SignUp.styles';
import { Input } from '@components/Input';
import { useIconRendering, useToggleStatus } from '@hooks/index';
import { theme } from '@themes/theme';

export const SignUp = () => {

  const acceptanceOption = [{ text: 'Li e concordo com os termos', id: 1 }];
  return (
    <S.Container>
      <Input.CheckBox.Individual options={acceptanceOption} />
      <Input.Password />
    </S.Container>
  );
};