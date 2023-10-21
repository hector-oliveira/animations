import styled from 'styled-components/native';
import { theme } from '@themes/theme';

export const Container = styled.TouchableOpacity`
  margin-bottom: 20px;
  height: 25px;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: ${ theme.color.dark_900 };
`;