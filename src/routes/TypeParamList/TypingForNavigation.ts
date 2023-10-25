import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppScreensParamList } from "./AppScreensParamList";
import { AuthScreensParamList } from "./AuthScreensParamList";

export type AppRoutesNames = NativeStackNavigationProp<AppScreensParamList>;
export type AuthRoutesNames = NativeStackNavigationProp<AuthScreensParamList>;
