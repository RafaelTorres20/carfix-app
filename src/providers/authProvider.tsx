import React, {useState} from 'react';
import {IUser} from '../types/user';
import {AuthContext} from '../contexts/authContext';
import {useMutation} from '@tanstack/react-query';
import {login} from '../services/auth';

import {API_BASE_URL} from 'react-native-dotenv';

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const {mutateAsync} = useMutation({
    mutationKey: ['login'],
    mutationFn: login,
  });
  const [user, setUser] = useState<IUser>({} as IUser);
  const signIn = async (username: string, password: string) => {
    console.log(API_BASE_URL);
    const user = await mutateAsync({email: username, password});
    setUser(user as IUser);
  };
  const signOut = () => {
    setUser({} as IUser);
  };
  return (
    <AuthContext.Provider value={{user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};
