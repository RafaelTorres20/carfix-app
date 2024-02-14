import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Main} from '../pages/Main';

const {Navigator, Screen} = createNativeStackNavigator();
export const AppRoutes = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Main} />
    </Navigator>
  );
};
