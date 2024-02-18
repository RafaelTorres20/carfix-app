import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Main} from '../pages/Main';

const {Navigator, Screen} = createNativeStackNavigator();
export const AppRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Home" component={Main} />
    </Navigator>
  );
};
