import theme from '@themes/tokes.themes';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.lightColor[800] };
`;

export const Text = styled.Text`
  font-size: 24px;
  color: ${theme.colors.darkColor[900]};
`;