import Toast from 'react-native-toast-message';
import {ICar} from '../types/car';
import api from './api';

export const getCarByUserID = async (
  userID: string | undefined,
  token: string | undefined,
): Promise<ICar[]> => {
  if (!userID) {
    return [] as ICar[];
  }
  try {
    const data = await api.get<ICar[]>(`api/cars/user/${userID}`, {
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
    return [] as ICar[];
  }
};

export const setMyCarMileage = async ({
  carID,
  currentMileage,
  token,
}: {
  currentMileage: string;
  carID: string;
  token: string;
}) => {
  currentMileage = currentMileage.replace(/\D/g, '');
  const km = parseInt(currentMileage);
  try {
    await api.patch(
      `api/cars/${carID}`,
      {
        currentMileage: km,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Erro ao fazer login',
      text2: 'Verifique seus dados e tente novamente',
    });
  }
};
