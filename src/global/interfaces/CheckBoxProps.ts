import { TextInputProps } from "react-native";

export type OptionsCheckBoxProps = {
  text: string;
  id: number;
};

export type CheckBoxProps = TextInputProps & {
  options: OptionsCheckBoxProps[];
  onChange?: (option: boolean) => void;
};