import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Main} from '../pages/Main';
import {AddMaintenance} from '../pages/AddMaintenance/addMaintenance';
import {EditMaintenance} from '../pages/EditMaintenance/editMaintenance';
import {AddCosts} from '../pages/AddCosts/addCosts';
import {AddSchedules} from '../pages/AddSchedules/addSchedules';

const {Navigator, Screen} = createNativeStackNavigator();
export const AppRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Home" component={Main} />
      <Screen name="AddMaintenance" component={AddMaintenance} />
      <Screen name="EditMaintenance" component={EditMaintenance} />
      <Screen name="AddCosts" component={AddCosts} />
      <Screen name="AddSchedules" component={AddSchedules} />
    </Navigator>
  );
};
