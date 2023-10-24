import React from 'react';
import * as S from './Home.styles';
import { ButtonProducts } from '@components/all-components';
import { useNavigation } from '@react-navigation/native';
import { AppNavigationContextProperty } from '@routes/TypesRoutes/NavigationProps';
import { ImagePropsBase } from 'react-native';

const images = [
  { source: require('@assets/image/home/teste1.png') },
  { source: require('@assets/image/home/teste2.png') },
  { source: require('@assets/image/home/teste2.png') },
  { source: require('@assets/image/home/teste1.png') },
  { source: require('@assets/image/home/teste1.png') },
  { source: require('@assets/image/home/teste2.png') },
  { source: require('@assets/image/home/teste2.png') },
  { source: require('@assets/image/home/teste1.png') }
];

export const Home = () => {
  const navigation = useNavigation<AppNavigationContextProperty>();

  const handleNavigation = (id: string, image: Object ) => navigation.navigate(
      'details',
      { id, image }
    )
  return (
    <S.Container>
      <ButtonProducts 
        source={images[0].source}
        onPress={() => handleNavigation('ID = imagem 1', images[0].source)}
      />

      <ButtonProducts 
        source={images[1].source}
        onPress={() => handleNavigation('ID = imagem 2', 'IMAGEM: 2')} />

      <ButtonProducts 
        source={images[2].source}
        onPress={() => handleNavigation('ID = imagem 3', 'IMAGEM: 3')} />

      <ButtonProducts 
        source={images[3].source}
        onPress={() => handleNavigation('ID = imagem 4', 'IMAGEM: 4')} />

      <ButtonProducts 
        source={images[4].source}
        onPress={() => handleNavigation('ID = imagem 5', 'IMAGEM: 5')} />

      <ButtonProducts 
        source={images[5].source}
        onPress={() => handleNavigation('ID = imagem 6', 'IMAGEM: 6')} />

      <ButtonProducts 
        source={images[6].source}
        onPress={() => handleNavigation('ID = imagem 7', 'IMAGEM: 7')} />

      <ButtonProducts 
        source={images[7].source}
        onPress={() => handleNavigation('ID = imagem 8', 'IMAGEM: 8')} />

    </S.Container>
  );
};