import styled from 'styled-components/native';
import theme from '@themes/tokes.themes';

export const Container = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.lightColor[800],
})`
  font-size: 16px;
  flex: 1;
  height: 100%;
  padding-left: 20px;
  color: ${ theme.colors.lightColor[800] };


`;