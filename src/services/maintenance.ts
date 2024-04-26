import Toast from 'react-native-toast-message';
import {IMaintenance} from '../types/maintenance';
import api from './api';

export const getMaintenancesByUserID = async ({
  userID,
  token,
}: {
  userID: string;
  token: string;
}): Promise<IMaintenance[]> => {
  try {
    const data = await api.get(`api/maintenances/${userID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.data;
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Erro ao fazer login',
      text2: 'Verifique seus dados e tente novamente',
    });
    return {} as IMaintenance[];
  }
};
