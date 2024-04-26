import {AxiosResponse} from 'axios';
import {IUser} from '../types/user';
import api from './api';

export const login = async (
  email: string,
  password: string,
): Promise<IUser | undefined> => {
  try {
    const data = await api.post<any>('api/auth/login', {
      email,
      password,
    });
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
