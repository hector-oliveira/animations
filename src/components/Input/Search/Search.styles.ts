import styled from 'styled-components/native';
import { theme } from '@themes/theme';

export const Container = styled.View`
  height: 40px;
  width: 100%;
  background-color: ${ theme.color.bgContainer };
  border-radius: 20px;
  margin-bottom: 10px;
  flex-direction: row;
  gap: 5px;
`;

export const IconContainer = styled.TouchableOpacity`
  height: 100%;
  width: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: ${ theme.color.light[800] };
`;

