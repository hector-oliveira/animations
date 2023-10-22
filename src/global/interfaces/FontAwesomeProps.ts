import { OpaqueColorValue } from "react-native";

export type IconName = 
  'eye' | 'eye-slash' | 'check' | 'square-o' | 'user' |
  'search' | 'lock' | 'envelope-o' | 'sign-in' | 'sign-out';

export type IconRender = {
  initialStatus: boolean;
  trueIconName: IconName;
  falseIconName: IconName;
  trueIconSize?: number;
  falseIconSize?: number;
  trueIconColor?: string | OpaqueColorValue;
  falseIconColor?: string | OpaqueColorValue;
  trueIconBackgroundColor?:  string | OpaqueColorValue;
  falseIconBackgroundColor?: string | OpaqueColorValue;
}