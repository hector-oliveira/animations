import styled from 'styled-components/native';
import { theme } from '@themes/theme';

export const Container = styled.View`
  background-color: ${ theme.colors.bgColor['1.1'] };
  margin-bottom: 20px;
`;

export const Text = styled.Text`
  font-size: 24px;
  color: ${ theme.colors.lightColor[900] };
`;