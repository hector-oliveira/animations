import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthParamList } from './auth';
import { AppParamList } from './app';

export type AuthNavigationContextProperty = NativeStackNavigationProp<AuthParamList>;
export type AppNavigationContextProperty = NativeStackNavigationProp<AppParamList>;