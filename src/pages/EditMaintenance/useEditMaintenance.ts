import { useState } from 'react';
import Toast from 'react-native-toast-message';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { formatCurrency } from '../../helpers/utils/currency';
import { useAuth } from '../../hooks/useAuth';
import { useCar } from '../../hooks/useCar';
import { deleteMaintenance, updateMaintenance } from '../../services/maintenance';
import { IMaintenance } from '../../types/maintenance';

type RootStackParamList = {
  EditMaintenance: {maintenance: IMaintenance}; // Substitua isso pelos parâmetros que você está passando para a rota
  // Adicione outras rotas aqui
};

// Use RouteProp com RootStackParamList e o nome da rota para tipar `route`
type EditMaintenanceRouteProp = RouteProp<
  RootStackParamList,
  'EditMaintenance'
>;

export const useEditMaintenance = () => {
  const navigation = useNavigation();
  const {car} = useCar();
  const {user} = useAuth();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const queryClient = useQueryClient();
  const {
      params: {maintenance},
    } = useRoute<EditMaintenanceRouteProp>();
  const [form, setForm] = useState({
    name: maintenance.name,
    lastMaintenance: maintenance.lastMileage.toLocaleString() ,
    nextMaintenance: maintenance.nextMileage.toLocaleString(),
    maintenanceCost: '',
  });

  const {mutateAsync: editMaintenance} = useMutation({
    mutationKey: ['updateMaintenance'],
    mutationFn: updateMaintenance,
    onSuccess: () => {
      setIsEditing(false);
      queryClient.invalidateQueries({
        queryKey: ['getMaintenances'],
      });
      Toast.show({
        type: 'success',
        text1: 'Manutenção atualizada com sucesso!',
      });
    },
  });

  const {mutateAsync: removeMaintenance} = useMutation({
    mutationKey: ['deleteMaintenance'],
    mutationFn: deleteMaintenance,
    onSuccess: () => {
      setIsDeleting(false);
      queryClient.invalidateQueries({
        queryKey: ['getMaintenances'],
      });
      Toast.show({
        type: 'success',
        text1: 'Manutenção deletada com sucesso!',
      });
    },
  });

  const onChangeCost = (text: string) => {
    const formattedCost = formatCurrency(text);
    setForm({...form, maintenanceCost: formattedCost});
  }

  const onChangeLastMileage = (text: string) => {
    const formattedText = formatMileage(text);
    setForm({...form, lastMaintenance: formattedText});
  }

  const onChangeNextMileage = (text: string) => {
    const formattedText = formatMileage(text);
    setForm({...form, nextMaintenance: formattedText});
  }

  const formatMileage = (text: string) => {
    if(text.replace(/\D/g, '') === ''){
      return '' 
    }
    const number = parseInt(text.replace(/\D/g, ''));
    const formattedText = Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
    return formattedText;
  }

  const remove = async () => {
    try {
      setIsDeleting(true);
      await removeMaintenance({
        id: maintenance.id,
        token: user.token,
      });
      navigation.goBack();
    } catch (error) {
      setIsDeleting(false);
      Toast.show({
        type: 'error',
        text1: 'Erro ao deletar manutenção',
        text2: 'Verifique sua conexão e tente novamente',
      });
    }
  }

  const edit = async () => {
    try {
      setIsEditing(true);
      await editMaintenance({
        id: maintenance.id,
        token: user.token,
        lastMaintenance: form.lastMaintenance,
        nextMaintenance: form.nextMaintenance,
        name: form.name,
        newMaintenance: toggleCheckBox,
        maintenanceCost: form.maintenanceCost,
      });
      navigation.goBack();
    } catch (error) {
      setIsEditing(false);
      Toast.show({
        type: 'error',
        text1: 'Erro ao editar manutenção',
        text2: 'Verifique sua conexão e tente novamente',
      });
    }
  }


  return {
    form,
    car,
    user,
    queryClient,
    navigation,
    toggleCheckBox, 
    maintenance,
    isEditing,
    isDeleting,
    setIsEditing,
    setIsDeleting,
    setForm,
    editMaintenance,
    removeMaintenance,
    setToggleCheckBox,
    onChangeCost,
    formatMileage,
    onChangeNextMileage,
    onChangeLastMileage,
    remove,
    edit  
  };
};
