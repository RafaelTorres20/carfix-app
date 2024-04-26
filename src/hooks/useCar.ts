import {useContext} from 'react';
import {CarContext} from '../contexts/carContext';

export const useCar = () => {
  return useContext(CarContext);
};
