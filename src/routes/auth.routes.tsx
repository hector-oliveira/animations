import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import * as screen from '@auth/auth-screens';

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes = () => {
  return(
    <NavigationContainer>
      <Navigator screenOptions={ { headerShown: false } } >
        <Screen name="SignIn" component={screen.SignUp} />
      </Navigator>
    </NavigationContainer>
  );
}


