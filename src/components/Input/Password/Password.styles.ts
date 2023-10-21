import styled from 'styled-components/native';
import { theme } from '@themes/theme';

export const Container = styled.SafeAreaView`
  height: 40px;
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-left: 10px;
  border: 1px solid ${ theme.color.contour };
  border-radius: 8px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  padding: 0 8px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
