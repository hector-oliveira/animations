import styled from 'styled-components/native';
import { theme } from '@themes/theme';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 24px;
  color: #000;
`;

export const ImageContainer = styled.SafeAreaView`
  width: 100%;
  height: 100px;
  border: 1px solid ${ theme.color.light[800] };
  border-radius: 8px;
  padding: 8px 16px;

  border: 1px solid ${ theme.color.bgContainer };
`;

export const Image = styled.Text`
  height: 100%;
  width: 100%;
  border-radius: 8px;
  text-align: center;
  border: 1px solid ${ theme.color.contour };
`;
