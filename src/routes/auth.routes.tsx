import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';

import * as screens from '@screens-auth/auth.screens';

const AuthStack = createNativeStackNavigator();

export const AuthRoutes = () => {
  return(
    <NavigationContainer>
      <AuthStack.Navigator
        screenOptions={{
          headerShown: false 
         }}
      >
        <AuthStack.Screen
          name="SignIn"
          component={screens.SignUp}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}


