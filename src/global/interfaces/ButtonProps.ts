import { TouchableOpacityProps } from "react-native"


export type ButtonProps = TouchableOpacityProps & {
  placeholder: string,
  onChangeText?: (text: string) => void
}