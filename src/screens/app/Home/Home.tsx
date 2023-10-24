import React from 'react';
import * as S from './Home.styles';
import { ButtonProducts } from '@components/all-components';
import { useNavigation } from '@react-navigation/native';
import { AppNavigationContextProperty } from '@routes/TypesRoutes/NavigationProps';

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
  const handleNavigation = (id: string, img: Object) => navigation.navigate(
      'details',
      { id, image: img }
    )
  return (
    <S.Container>
      <ButtonProducts 
        source={images[0].source}
        onPress={() => handleNavigation('imagem 1', images[0].source)}
      />

      <ButtonProducts 
        source={images[1].source}
        onPress={() => handleNavigation('imagem 2', images[1].source)} />

      <ButtonProducts 
        source={images[2].source}
        onPress={() => handleNavigation('imagem 3', images[2].source)} />

      <ButtonProducts 
        source={images[3].source}
        onPress={() => handleNavigation('imagem 4', images[3].source)} />

      <ButtonProducts 
        source={images[4].source}
        onPress={() => handleNavigation('imagem 5', images[4].source)} />

      <ButtonProducts 
        source={images[5].source}
        onPress={() => handleNavigation('imagem 6', images[5].source)} />

      <ButtonProducts 
        source={images[6].source}
        onPress={() => handleNavigation('imagem 7', images[6].source)} />

      <ButtonProducts 
        source={images[7].source}
        onPress={() => handleNavigation('imagem 8', images[7].source)} />

    </S.Container>
  );
};