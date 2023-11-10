import styled from 'styled-components/native';
import { theme } from '@themes/theme';

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const Description = styled.Text`
  font-size: 18px;
  opacity: 0.5;
  color: #000;
  width: 90%;
  text-align: center;
  align-self: center;
`;

export const ImageContainer = styled.SafeAreaView`
  width: 100%;
  height: 300px;
  padding: 8px 0px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.ImageBackground.attrs({ resizeMode: 'contain' })`
  height: 98%;
  width: 98%;
`;

export const Price = styled.Text`
  font-size: 24px;
  color: #000;
  text-align: center;
  align-self: flex-end;
  margin-top: 40px;
  margin-right: 20px;
`;
