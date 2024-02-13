import {createContext} from 'react';
import {IUser} from '../types/user';

type AuthContextData = {
  user: IUser | null;
  signIn: (username: string, password: string) => void;
  signOut: () => void;
};

export const AuthContext = createContext({} as AuthContextData);
