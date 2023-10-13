import { OpaqueColorValue } from "react-native";
import { Feather,AntDesign } from "@expo/vector-icons";

export type IconProps = {
  name: React.ComponentProps<typeof Feather>['name'];
  size: number;
  color?: string | OpaqueColorValue;
};