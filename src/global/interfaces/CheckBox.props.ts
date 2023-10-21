import { TextInputProps } from "react-native";

type OptionsCheckBoxProps = {
  text: string;
  id: number;
};

export type CheckBoxProps = {
  options: OptionsCheckBoxProps[];
  onChange?: (option: string) => void;
}& TextInputProps;