import Toast from 'react-native-toast-message';
import {ICar} from '../types/car';
import api from './api';
import {AxiosError} from 'axios';
import {DocumentPickerResponse} from 'react-native-document-picker';

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

export const addCar = async ({
  name,
  plate,
  mileage,
  photo,
  token,
  userID,
}: {
  name: string;
  plate: string;
  mileage: string;
  photo: DocumentPickerResponse; // Altere o tipo de 'photo' para 'File'
  token: string;
  userID: string;
}) => {
  mileage = mileage.replace(/\D/g, '');
  const km = parseInt(mileage);
  try {
    const formData = new FormData();
    formData.append('model', name);
    formData.append('plate', plate);
    formData.append('currentMileage', km.toString());
    formData.append('photo', {
      uri: photo.uri,
      type: photo.type,
      name: photo.name,
    });
    formData.append('userID', userID);

    await api.post('api/cars', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Erro ao adicionar carro',
    });
  }
};
