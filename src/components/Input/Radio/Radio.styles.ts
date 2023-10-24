import styled from 'styled-components/native';
import { theme } from '@themes/theme';

export const Container = styled.View`
  height: 40px;
  width: 100%;
  background-color: ${ theme.color.bgContainer };
  border-radius: 5px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 24px;
  color: ${ theme.color.dark[900] };
`;