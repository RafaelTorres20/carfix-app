import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useCar } from '../../hooks/useCar';
import theme from '../../styles/theme';
import { IMaintenance } from '../../types/maintenance';

type RootStackParamList = {
  EditMaintenance: {
    maintenance: IMaintenance;
  };
};

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'EditMaintenance'
>;

export const useMaintenanceCard = (maintenance: IMaintenance) => {
    const {navigate} = useNavigation<NavigationProp>();
  const {car} = useCar();
  const progress =
    (car.currentMileage - maintenance.lastMileage) /
    (maintenance.nextMileage - maintenance.lastMileage);

  const setColor = (progress: number) => {
    const float = parseFloat((progress * 100).toFixed(1));
    if (float > 85) {
      return theme.colors.red;
    }
    if (float > 70) {
      return theme.colors.warning;
    }
    return theme.colors.primary;
  };

  const formatPercentage = (progress: number) => {
    const float = parseFloat((progress * 100).toFixed(1));
    if (float >= 100) {
      return 100;
    }
    if (float <= 0) {
      return 0;
    }

    return float;
  };

  return {
    progress,
    setColor,
    formatPercentage,
    navigate,
  }
}
