import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { IconRender } from '@interfaces/TypesFontAwesome';

export const useIconRendering = ({ 
  initialStatus,
  nameIconTrue,
  nameIconFalse,
  sizeIconTrue = 20,
  sizeIconFalse = 20, 
  ...rest
}: IconRender) => {
  const handleIconRendering = () => {
    return initialStatus ?  (
      <FontAwesome
        name={nameIconTrue}
        size={sizeIconTrue} 
        color={ rest.colorIconTrue } 
        backgroundColor={ rest.bgColorIconTrue }
      />
    ) : (
      <FontAwesome 
        name={nameIconFalse}
        size={sizeIconFalse}
        color={ rest.colorIconFalse }
        backgroundColor={ rest.bgColorIconFalse }
      />
    );
  }

  return { handleIconRendering };
};