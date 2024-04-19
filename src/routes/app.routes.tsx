import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Main} from '../pages/Main';
import {AddMaintenance} from '../pages/AddMaintenance/addMaintenance';

const {Navigator, Screen} = createNativeStackNavigator();
export const AppRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Home" component={Main} />
      <Screen name="AddMaintenance" component={AddMaintenance} />
    </Navigator>
  );
};
