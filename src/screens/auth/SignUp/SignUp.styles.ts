import { theme } from '@themes/theme';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  background-color: ${ theme.color.light_800 };
`;

export const Button = styled.TouchableOpacity``;