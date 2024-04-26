import {FlatList, Text, View} from 'react-native';
import {Center} from '../../components/Center';
import {MainButton} from '../../components/Buttons/MainButton';
import {CurrentKMBar, KMText, KMValue, UpdateKMButton} from './styles';
import {MaintenanceCard} from '../../components/MaintenanceCard';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {useCar} from '../../hooks/useCar';
import {useEffect, useState} from 'react';
import {useMutation} from '@tanstack/react-query';
import {setMyCarMileage} from '../../services/car';
import {useAuth} from '../../hooks/useAuth';
import Toast from 'react-native-toast-message';

export const Maintenances = () => {
  const {car} = useCar();
  const {user} = useAuth();
  const [currentMileage, setCurrentMileage] = useState(
    car?.currentMileage?.toLocaleString() ?? '0',
  );
  const {mutateAsync} = useMutation({
    mutationKey: ['setMileage', currentMileage, car.id, user.id],
    mutationFn: setMyCarMileage,
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'KM salvo com sucesso! 🚗',
        text2: 'A média de KM por dia foi atualizada!',
      });
    },
  });
  useEffect(() => {
    setCurrentMileage(car?.currentMileage?.toLocaleString() ?? '0');
  }, [car]);
  return (
    <View>
      <CurrentKMBar>
        <KMText>KM:</KMText>
        <Center style={{width: '40%'}}>
          <KMValue
            keyboardType="numbers-and-punctuation"
            defaultValue={car.currentMileage?.toLocaleString()}
            value={currentMileage}
            onChangeText={text => {
              text = text.replace(/\D/g, '');
              const km = parseInt(text);
              setCurrentMileage(km.toLocaleString());
            }}
          />
        </Center>
        <UpdateKMButton>
          <MainButton
            size="small"
            onPress={async () => {
              await mutateAsync({
                carID: car.id,
                currentMileage,
                token: user.token,
              });
            }}>
            Salvar
          </MainButton>
        </UpdateKMButton>
      </CurrentKMBar>

      <FlatList
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{height: RFPercentage(10)}}></View>}
        contentContainerStyle={{
          alignItems: 'center',
          paddingVertical: 30,
        }}
        data={[1, 2, 3, 4, 5]}
        renderItem={({item}) => <MaintenanceCard />}
        keyExtractor={item => item.toString()}
      />
    </View>
  );
};
