import styled from 'styled-components/native';
import { theme } from '@themes/theme';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

export const Button = styled.TouchableOpacity`
  width: 85%;
  height: 70px;
  border-radius: 8px;
  background-color: ${theme.color.status_bar};
  color: ${theme.color.light[900]};
`;
