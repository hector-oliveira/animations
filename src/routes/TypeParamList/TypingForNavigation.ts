import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppScreensParamList } from "./AppScreensParamList";
import { AuthScreensParamList } from "./AuthScreensParamList";

export type AppRoutesNames = NativeStackScreenProps<AppScreensParamList>;
export type AuthRoutesNames = NativeStackScreenProps<AuthScreensParamList>;
