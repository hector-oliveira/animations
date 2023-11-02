import styled from 'styled-components/native';
import { theme } from '@themes/theme';
import { Feather } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity`
  height: 50px;
  width: 90%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 35px;
  background-color: ${ theme.colors.social };
`;

export const Text = styled.Text`
  font-size: 20px;
  text-transform: uppercase;
  color: ${ theme.color.light[800] };
`;

export const Icon = styled(Feather)``;