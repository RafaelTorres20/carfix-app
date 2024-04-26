import {ICar} from '../types/user';
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
    console.log(error);
    return [] as ICar[];
  }
};
