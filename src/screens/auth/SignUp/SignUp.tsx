import React, { useState } from 'react';
import * as S from './SignUp.styles';
import { Input } from '@components/Input/index';
import { optionsForCheckbox, sideDishes } from './data/optionsCheckbox';
import { OptionsCheckboxProps } from '@components/Input/Checkbox/utils/Checkbox.interface';

export const SignUp = () => {
  return (
    <S.Container>
      <Input.Password />
      <S.Title>
        Checkbox opcional: {'\n'}
        <S.Text>
        1 - Li e concordo com os termos. {'\n'}
        2 - Múltipla escolha
        </S.Text>
      </S.Title>
      <Input.Checkbox 
        options={optionsForCheckbox}
        onChange={op => console.log(op.map(i => (`${i.id} - ${i.label}`)).join('\n'))}
      />
      <S.Title>Checkbox Múltiplo</S.Title>
      <Input.Checkbox 
        options={sideDishes}
        onChange={op => console.log(op.map(i => (`${i.id} - ${i.label}`)).join('\n'))}
        multiple
        
      />
    </S.Container>
  );
};