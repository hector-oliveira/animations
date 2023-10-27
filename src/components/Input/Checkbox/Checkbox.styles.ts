import styled from 'styled-components/native';
import { theme } from '@themes/theme';

export const Container = styled.SafeAreaView`
  height: 40px;
  width: 90%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 8px;
  gap: 5px;
  margin-bottom: 10px;

  border: 1px solid red;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #000;
`;

export const ButtonContainer = styled.TouchableOpacity`
  height: 100%;
  width: 30px;
  justify-content: center;
  align-items: center;
`;