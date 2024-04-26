import Toast from 'react-native-toast-message';
import {IMaintenance} from '../types/maintenance';
import api from './api';
import {AxiosError} from 'axios';

export const getMaintenancesByCarID = async ({
  carID,
  token,
}: {
  carID: string;
  token: string;
}): Promise<IMaintenance[]> => {
  try {
    const data = await api.get(`api/maintenances/${carID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data.data;
  } catch (error) {
    const err = error as AxiosError;
    if (err.response?.status === 404) {
      Toast.show({
        type: 'info',
        text1: 'Nenhuma manutenção encontrada',
        text2: 'Adicione uma manutenção para começar',
      });
      return [] as IMaintenance[];
    }
    Toast.show({
      type: 'error',
      text1: 'Erro ao buscar manutenções',
      text2: 'Verifique seus dados e tente novamente',
    });
    return {} as IMaintenance[];
  }
};
export const addMaintenance = async ({
  name,
  lastMaintenance,
  nextMaintenance,
  carID,
  token,
}: {
  name: string;
  lastMaintenance: string;
  nextMaintenance: string;
  carID: string;
  token: string;
}): Promise<IMaintenance> => {
  const last = parseInt(lastMaintenance.replace(/\D/g, ''));
  const next = parseInt(nextMaintenance.replace(/\D/g, ''));
  try {
    const data = await api.post(
      'api/maintenances',
      {
        name,
        lastMileage: last,
        nextMileage: next,
        carID,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return data.data;
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Erro ao adicionar manutenção',
      text2: 'Verifique seus dados e tente novamente',
    });
    return {} as IMaintenance;
  }
};
