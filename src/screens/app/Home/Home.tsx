import React from 'react';
import * as S from './Home.styles';
import { Button, ProductsButton } from '@components/all-components';
import { useScreensNavigation } from './hook/useScreensNavigation'
import { productDetails } from './data/productDetails.data';

export const Home = () => {
  const { details } = productDetails();
  const { handleNavigation } = useScreensNavigation();

  return (
    <S.Container>
      {details.map((detail, index) => (
        <ProductsButton 
          key={index}
          source={detail.image}
          onPress={() => handleNavigation({
            image: detail.image,
            description: detail.description,
            price: detail.price
          })}
        />
      ))}
    </S.Container>
  );
};