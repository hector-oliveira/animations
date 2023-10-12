import styled from 'styled-components/native';
import theme from '@themes/tokes.themes';

export const Container = styled.View`
  background-color: ${ theme.colors.bgColor[1] };
  margin-bottom: 20px;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: ${ theme.colors.lightColor[900] };
`;