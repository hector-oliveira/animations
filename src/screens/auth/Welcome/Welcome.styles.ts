import styled from 'styled-components/native';
import { theme } from '@themes/theme';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: ${ theme.colors.main };
`;

export const Text = styled.Text`
  font-size: 20px;
  color: ${ theme.color.light[900] };
`;

export const Title = styled.Text`
  font-size: 30px;
  color: ${ theme.color.light[800] };
`;

export const ImageContainer = styled.SafeAreaView`
  height: 60%;
  width: 90%;
  justify-content: flex-end;
`;

export const Image = styled.ImageBackground.attrs({ resizeMode: 'contain' })`
  height: 100%;
  width: 100%;
`;

export const NavigationContainer = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;