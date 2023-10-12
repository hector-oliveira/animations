import { TextInputProps } from "react-native";
import { Feather } from '@expo/vector-icons';

export type InputTextProps = {
  onChangeText: (text: string) => void;
  placeholder: string
} & TextInputProps;

export type InputTypesProps = {
  icon?: React.ComponentProps<typeof Feather>['name'];
} & InputTextProps;