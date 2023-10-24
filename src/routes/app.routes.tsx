import * as React from 'react';
import * as screens from '@app-screens/app-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppParamList } from './TypesRoutes/app';

const { Navigator, Screen } = createNativeStackNavigator<AppParamList>();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName='home' screenOptions={ { headerShown: false } } >
        <Screen name='details' component={ screens.Details } />
        <Screen name='home' component={screens.Home} />
      </Navigator>
    </NavigationContainer>
  );
}