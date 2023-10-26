import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { AuthScreensParamList } from './TypeParamList';
import { AppRoutes } from './app.routes';
import * as screen from '@auth/auth-screens';

const { Navigator, Screen } = createNativeStackNavigator<AuthScreensParamList>();

export const AuthRoutes = () => {
  return(
    <NavigationContainer>
      <Navigator initialRouteName='signUp'  screenOptions={ { headerShown: false } } >
        <Screen name='signUp' component={screen.SignUp} />
        <Screen name='login' component={screen.Login} />
        <Screen name='recoverPassword' component={screen.RecoverPassword} />
        <Screen name='app' component={AppRoutes} />
      </Navigator>
    </NavigationContainer>
  );
}


