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
    console.log(error);
    return {} as IMaintenance[];
  }
};
