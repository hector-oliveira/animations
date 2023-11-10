import { TextInputProps } from "react-native";
import { Feather } from '@expo/vector-icons';

export type InputTextProps = TextInputProps & {
  icon?: React.ComponentProps<typeof Feather>['name'];
  placeholder?: string
  onChangeText?: (text: string) => void;
};