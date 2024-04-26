import React, {useState} from 'react';
import {ICar} from '../types/car';
import {CarContext} from '../contexts/carContext';

export const CarProvider = ({children}: {children: React.ReactNode}) => {
  const [car, setCar] = useState<ICar>({} as ICar);
  const setMyCar = (car: ICar) => {
    setCar(car);
  };
  return (
    <CarContext.Provider value={{car, setMyCar}}>
      {children}
    </CarContext.Provider>
  );
};
