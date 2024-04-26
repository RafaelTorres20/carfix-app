import React, {useState} from 'react';
import {IUser} from '../types/user';
import {AuthContext} from '../contexts/authContext';
import {useMutation} from '@tanstack/react-query';
import {login} from '../services/auth';

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const {mutateAsync} = useMutation({
    mutationKey: ['login'],
    mutationFn: ({username, password}: {username: string; password: string}) =>
      login(username, password),
  });
  const [user, setUser] = useState<IUser>({} as IUser);
  const signIn = async (username: string, password: string) => {
    const user = await mutateAsync({username, password});
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
