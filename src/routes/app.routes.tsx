import * as React from 'react';
import * as screens from '@app/app-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppScreensParamList } from './TypeParamList';

const { Navigator, Screen } = createNativeStackNavigator<AppScreensParamList>();

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