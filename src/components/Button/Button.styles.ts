import styled from 'styled-components/native';
import { theme } from '@themes/theme';

export const Container = styled.TouchableOpacity`
  height: 50px;
  width: 90%;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  background-color: ${ theme.colors.social };
`;

export const Text = styled.Text`
  font-size: 20px;
  text-transform: uppercase;
  color: ${ theme.color.light[800] };
`;