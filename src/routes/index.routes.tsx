import * as React from 'react';
import {AppRoutes} from './app.routes';
import {useAuth} from '../hooks/useAuth';
import {AuthRoutes} from './auth.routes';

export const Routes = () => {
  const {user} = useAuth();
  if (!user) {
    return <AuthRoutes />;
  }
  return <AppRoutes />;
};
