import React, { useEffect, useState } from 'react';
import * as S from './Checkbox.styles';
import { CheckboxProps } from './utils/Checkbox.interface';
import { useCheckbox } from './utils/useCheckbox';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const Checkbox = ({ options = [], onChange, multiple = false }: CheckboxProps) => {
    const { areSelected, handleToggle } = useCheckbox();

    useEffect(() => onChange(areSelected), [areSelected]);
    return (
      <>
        { options.map((option) => (
            <S.Container key={option.id}>
              <S.ButtonContainer onPress={() => handleToggle(option, multiple)}>
              { areSelected.findIndex((item) => (item.id === option.id)) !== -1 ? (
                <FontAwesome  
                  name="check"
                  size={16}
                  color='#FFF'
                  style={{ 
                    backgroundColor: '#38b871',
                    borderRadius: 3 
                  }}
                />
              ): (
                <FontAwesome name='square-o' size={20} />
              )
              }
              </S.ButtonContainer>
              <S.Text>{option.label}</S.Text>
            </S.Container>
          ))
        }
      </>
    );
  };
