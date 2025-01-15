import { useState } from 'react';
import Toast from 'react-native-toast-message';

import { useNavigation } from '@react-navigation/native';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useAuth } from '../../hooks/useAuth';
import { useCar } from '../../hooks/useCar';
import { addMaintenance } from '../../services/maintenance';

export const useAddMaintenance = () => {
  const navigation = useNavigation();
  const {car} = useCar();
  const {user} = useAuth();
  const queryClient = useQueryClient();
  const [form, setForm] = useState({
    name: '',
    lastMaintenance: '',
    nextMaintenance: '',
  });

  const {mutateAsync, isPending: isAdding} = useMutation({
    mutationKey: ['addMaintenance'],
    mutationFn: addMaintenance,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['getMaintenances']});
        Toast.show({
          type: 'success',
          text1: 'Manutenção adicionada com sucesso!',
        });
      }
  });

  const createMaintenance = async () => {
    if (
      parseInt(form.lastMaintenance) >= parseInt(form.nextMaintenance)
    ) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao adicionar manutenção',
        text2:
          'A quilometragem da próxima manutenção deve ser maior que a última',
      });
      return;
    }

    if (
      !form.name ||
      !form.lastMaintenance ||
      !form.nextMaintenance
    ) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao adicionar manutenção',
        text2: 'Informe todos os campos',
      });
      return;
    }

    try {
      await mutateAsync({...form, carID: car?.id, token: user.token});
      navigation.goBack();
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao adicionar manutenção',
        text2: 'Verifique seus dados e tente novamente',
      });
    }
  }
  
  return {
    isAdding,
    form,
    setForm,
    car,
    user,
    mutateAsync,
    queryClient,
    navigation,
    createMaintenance,
  };
};
