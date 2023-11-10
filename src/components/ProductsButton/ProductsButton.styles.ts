import styled from 'styled-components/native';
import { theme } from '@themes/theme';

export const Container = styled.TouchableOpacity`
  height: 140px;
  width: 140px;
  justify-content: center;
  align-items: center;
  background-color: ${ theme.color.bgContainer };
  border-radius: 8px;
  padding: 5px 0;
`;

export const ImageContainer = styled.SafeAreaView`
  height: 100%;
  width: 85%;
  background-color: ${ theme.color.background };
  border-radius: 8px;
`;

export const Image = styled.ImageBackground`
  height: 100%;
  width: 100%;
  border-radius: 8px;
`;
