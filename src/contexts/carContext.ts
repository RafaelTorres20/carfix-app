import {createContext} from 'react';
import {ICar} from '../types/user';

type CarContextData = {
  car: ICar;
  setMyCar: (car: ICar) => void;
};

export const CarContext = createContext({} as CarContextData);
