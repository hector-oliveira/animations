import styled from 'styled-components/native';
import { theme } from '@themes/theme';

export const Container = styled.TouchableOpacity`
  height: 140px;
  width: 140px;
  justify-content: center;
  align-items: center;
  background-color: ${ theme.color.light[900] };
  border-radius: 8px;
  padding: 5px 0;
`;

export const ImageContainer = styled.SafeAreaView`
  height: 100%;
  width: 85%;
  border: 1px solid ${ theme.color.light[800] };
  border-radius: 8px;
`;

export const Image = styled.ImageBackground`
  height: 100%;
  width: 100%;
  border-radius: 8px;
`;
