import styled from 'styled-components/native';
import theme from '@themes/tokes.themes';

export const Container = styled.View`
  height: 40px;
  width: 100%;
  background-color: ${ theme.colors.bgColor[5] };
  border-radius: 5px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 24px;
  color: ${ theme.colors.lightColor[900] };
`;