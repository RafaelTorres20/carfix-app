import React, {useState} from 'react';
import {IUser} from '../types/user';
import {AuthContext} from '../contexts/authContext';

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<IUser | null>(null);
  const signIn = (username: string, password: string) => {
    const user: IUser = {id: 1, username, email: 'teste@teste'};
    setUser(user);
  };
  const signOut = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};
