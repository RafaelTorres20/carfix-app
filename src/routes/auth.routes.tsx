import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Forgot} from '../pages/Forgot/styles';
import {Login} from '../pages/Login';
import {Register} from '../pages/Register';

const {Navigator, Screen} = createNativeStackNavigator();
export const AuthRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="Forgot" component={Forgot} />
    </Navigator>
  );
};
