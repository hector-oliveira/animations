import { OpaqueColorValue } from "react-native";

export type IconName = 
  'eye' | 'eye-slash' | 'check' | 'square-o' | 'user' |
  'search' | 'lock' | 'envelope-o' | 'sign-in' | 'sign-out';

export type IconRender = {
  initialStatus:     boolean;
  nameIconTrue:      IconName;
  nameIconFalse:     IconName;
  sizeIconTrue?:     number;
  sizeIconFalse?:    number;
  colorIconTrue?:    string | OpaqueColorValue;
  colorIconFalse?:   string | OpaqueColorValue;
  bgColorIconTrue?:  string | OpaqueColorValue;
  bgColorIconFalse?: string | OpaqueColorValue;
}