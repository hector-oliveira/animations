import { TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";

export type ButtonProps = TouchableOpacityProps & {
  placeholder: string,
  icon?: React.ComponentProps<typeof Feather>['name'],
  onPress?: (text: string) => void
}