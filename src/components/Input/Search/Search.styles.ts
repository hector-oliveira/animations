import styled from 'styled-components/native';
import { theme } from '@themes/theme';

export const Container = styled.SafeAreaView`
  height: 40px;
  width: 90%;
  flex-direction: row;
  align-items: center;
  border: 1px solid ${ theme.color.contour };
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const IconContainer = styled.SafeAreaView`
  height: 100%;
  width: 40px;
  align-items: center;
  justify-content: center;
`;

