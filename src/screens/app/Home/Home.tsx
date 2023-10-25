import React from 'react';
import * as S from './Home.styles';
import { ButtonProducts } from '@components/all-components';
import { useDataImage, useScreensNavigation } from './hook/index';

export const Home = () => {
  const { images } = useDataImage();
  const { handleNavigation } = useScreensNavigation();
  return (
    <S.Container>
      <ButtonProducts 
        source={images[0].source}
        onPress={() => handleNavigation('Index: 1', 'images[0].source')}
      />
      
      <ButtonProducts 
        source={images[1].source}
        onPress={() => handleNavigation('Index: 2', 'images[1].source')}
      />

      <ButtonProducts 
        source={images[2].source}
        onPress={() => handleNavigation('Index: 3', 'images[2].source')}
      />

      <ButtonProducts 
        source={images[3].source}
        onPress={() => handleNavigation('Index: 4', 'images[3].source')}
      />

      <ButtonProducts 
        source={images[4].source}
        onPress={() => handleNavigation('Index: 5', 'images[4].source')}
      />

      <ButtonProducts 
        source={images[5].source}
        onPress={() => handleNavigation('Index: 6', 'images[5].source')}
      />

      <ButtonProducts 
        source={images[6].source}
        onPress={() => handleNavigation('Index: 7', 'images[6].source')}
      />

      <ButtonProducts 
        source={images[7].source}
        onPress={() => handleNavigation('Index: 8', 'images[7].source')}
      />


    </S.Container>
  );
};