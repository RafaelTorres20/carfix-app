import React, {useEffect, useState} from 'react';
import {ICar} from '../types/car';
import {CarContext} from '../contexts/carContext';

export const CarProvider = ({children}: {children: React.ReactNode}) => {
  const [car, setCar] = useState<ICar>({} as ICar);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const setMyCar = (car: ICar) => {
    setCar(car);
  };
  useEffect(() => {
    if (car?.id) {
      setIsLoading(false);
    }
  }, [car]);
  return (
    <CarContext.Provider value={{car, setMyCar, isLoading}}>
      {children}
    </CarContext.Provider>
  );
};
