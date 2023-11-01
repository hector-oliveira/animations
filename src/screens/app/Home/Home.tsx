import React from 'react';
import * as S from './Home.styles';
import { ProductsButton } from '@components/all-components';
import { useDataImage, useScreensNavigation } from './hook/index';

export const Home = () => {
  const { images } = useDataImage();
  const { handleNavigation } = useScreensNavigation();

  return (
    <S.Container>
      {images.map((image, index) => (
        <ProductsButton 
          key={index}
          source={image.source}
          onPress={() => handleNavigation(image.source, image.description)}
        />
      ))}
    </S.Container>
  );
};