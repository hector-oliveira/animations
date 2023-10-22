import { TextInputProps } from "react-native";

type OptionsCheckBoxProps = {
  text: string;
  id: number;
};

export type CheckBoxProps = TextInputProps & {
  options: OptionsCheckBoxProps[];
  onChange?: (option: string) => void;
};