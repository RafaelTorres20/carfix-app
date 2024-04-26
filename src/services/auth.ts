import {AxiosResponse} from 'axios';
import {IUser} from '../types/user';
import api from './api';
import Toast from 'react-native-toast-message';

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<IUser | undefined> => {
  try {
    const data = await api.post<any>('api/auth/login', {
      email,
      password,
    });
    return data.data;
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Erro ao fazer login',
      text2: 'Verifique seus dados e tente novamente',
    });
  }
};
