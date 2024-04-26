import {createContext} from 'react';
import {IUser} from '../types/user';

type AuthContextData = {
  user: IUser;
  signIn: (username: string, password: string) => void;
  signOut: () => void;
};

export const AuthContext = createContext({} as AuthContextData);
