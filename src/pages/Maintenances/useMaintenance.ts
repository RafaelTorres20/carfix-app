import { useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { useAuth } from '../../hooks/useAuth';
import { useCar } from '../../hooks/useCar';
import { setMyCarMileage } from '../../services/car';
import { getMaintenancesByCarID } from '../../services/maintenance';
import { IMaintenance } from '../../types/maintenance';

export const useMaintenance = () => {
  const {car} = useCar();
  const {user} = useAuth();
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentMileage, setCurrentMileage] = useState(
    car?.currentMileage?.toLocaleString() ?? '0',
  );
  const queryClient = useQueryClient();
  
  const {
    data: maintenances,
    isSuccess: isMaintenancesSuccess,
    isLoading: isMaintenancesLoading,
    refetch: refetchMaintenances,
  } = useQuery({
    queryKey: ['getMaintenances'],
    queryFn: (): Promise<IMaintenance[]> =>
      getMaintenancesByCarID({carID: car?.id, token: user.token}),
    enabled: !!car?.id,
  });

  const {mutateAsync} = useMutation({
    mutationKey: ['setMileage', currentMileage, car?.id, user?.id],
    mutationFn: setMyCarMileage,
    onSuccess: () => {
      setIsLoading(false);
      Toast.show({
        type: 'success',
        text1: 'KM salvo com sucesso! 🚗',
        text2: 'A média de KM por dia foi atualizada!',
      });
      queryClient.invalidateQueries({
        queryKey: ['car', user.id],
      });
    },
  });
  useEffect(() => {
    setCurrentMileage(car?.currentMileage?.toLocaleString() ?? '0');
  }, [car]);

  const handleSetMileage = async () => {
    setIsLoading(true);
    await mutateAsync({
      carID: car?.id,
      currentMileage,
      token: user.token,
    });
  };

  const handleChangeMileage = (text: string) => {
    text = text.replace(/\D/g, '');
    const km = parseInt(text);
    setCurrentMileage(km.toLocaleString());
  };

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      await refetchMaintenances();
    } catch (e) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao atualizar manutenções',
        text2: 'Verifique sua conexão e tente novamente',
      });
    }
    setRefreshing(false);
  };

  return {
    currentMileage,
    maintenances,
    isMaintenancesLoading,
    isMaintenancesSuccess,
    refreshing,
    isLoading,
    setRefreshing,
    handleSetMileage,
    setCurrentMileage,
    mutateAsync,
    handleChangeMileage,
    refetchMaintenances,
    onRefresh,
  };
};
