import styled from 'styled-components/native';
import { theme } from '@themes/theme';

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