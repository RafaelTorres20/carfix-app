import {createContext} from 'react';
import {ICar} from '../types/car';

type CarContextData = {
  car: ICar;
  setMyCar: (car: ICar) => void;
  isLoading: boolean;
};

export const CarContext = createContext({} as CarContextData);
