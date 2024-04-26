import {useNavigation} from '@react-navigation/native';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import React from 'react';
import {useAuth} from '../../hooks/useAuth';
import {useCar} from '../../hooks/useCar';
import {addMaintenance} from '../../services/maintenance';

export const useAddMaintenance = () => {
  const navigation = useNavigation();
  const {car} = useCar();
  const {user} = useAuth();
  const [form, setForm] = React.useState({
    name: '',
    lastMaintenance: '',
    nextMaintenance: '',
  });

  const {mutateAsync} = useMutation({
    mutationKey: ['addMaintenance'],
    mutationFn: addMaintenance,
  });
  const queryClient = useQueryClient();
  return {
    form,
    setForm,
    car,
    user,
    mutateAsync,
    queryClient,
    navigation,
  };
};
