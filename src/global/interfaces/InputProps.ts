import { TextInputProps } from "react-native";
import { Feather } from '@expo/vector-icons';

export type InputTextProps = TextInputProps & {
  onChangeText: (text: string) => void;
  placeholder: string
};

export type InputTypesProps = InputTextProps & {
  icon?: React.ComponentProps<typeof Feather>['name'];
};