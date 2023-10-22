import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { IconRender } from '@interfaces/FontAwesomeProps';

export const useConditionalIconRender = ({ 
  initialStatus,
  trueIconName,
  falseIconName,
  trueIconSize = 20,
  falseIconSize = 20, 
  ...rest
}: IconRender) => {

  const handleIconRendering = () => {
    return initialStatus ?  (
      <FontAwesome
        name={trueIconName}
        size={trueIconSize} 
        color={ rest.trueIconColor } 
        backgroundColor={ rest.trueIconBackgroundColor }
      />
    ) : (
      <FontAwesome 
        name={falseIconName}
        size={falseIconSize}
        color={ rest.falseIconColor }
        backgroundColor={ rest.falseIconBackgroundColor }
      />
    );
  }

  return { handleIconRendering };
};