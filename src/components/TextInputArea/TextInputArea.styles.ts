import styled from 'styled-components/native';
import { theme } from '@themes/theme';

export const Container = styled.TextInput`
  font-size: 16px;
  flex: 1;
  height: 100%;
  border: 1px solid ${ theme.color.light[800] };
  border-radius: 8px;
  padding: 6px;
  color: ${ theme.color.dark[900] };
`;