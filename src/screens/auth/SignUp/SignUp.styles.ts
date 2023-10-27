import { theme } from '@themes/theme';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  background-color: ${ theme.color.light[800] };
`;

export const Title = styled.Text`
  text-decoration: underline;
  font-size: 18px;
  font-weight: bold;
`;

export const Text = styled.Text`
  text-decoration: underline;
  font-size: 14px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity``;