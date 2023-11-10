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
  gap: 20px;
  padding-top: 20px;
  background-color: ${ theme.colors.main };
`;
