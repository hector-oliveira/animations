import { theme } from '@themes/theme';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  background-color: ${ theme.colors.main };
`;
export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${ theme.color.light[900] };
`;

export const Button = styled.TouchableOpacity``;