import styled from 'styled-components/native';
import theme from '@themes/tokes.themes';

export const Container = styled.TextInput`
  font-size: 16px;
  flex: 1;
  height: 100%;
  padding-left: 20px;
  color: ${ theme.colors.darkColor[900] };
`;