import {FlatList, Text, View} from 'react-native';
import {Center} from '../../components/Center';
import {MainButton} from '../../components/Buttons/MainButton';
import {CurrentKMBar, KMText, KMValue, UpdateKMButton} from './styles';
import {MaintenanceCard} from '../../components/MaintenanceCard';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {useCar} from '../../hooks/useCar';
import {useState} from 'react';

export const Maintenances = () => {
  const {car} = useCar();
  const [actualKm, setActualKm] = useState(
    car?.actualKm?.toLocaleString() ?? '0',
  );
  return (
    <View>
      <CurrentKMBar>
        <KMText>KM:</KMText>
        <Center style={{width: '40%'}}>
          <KMValue
            keyboardType="numbers-and-punctuation"
            defaultValue={car.actualKm?.toLocaleString() ?? '0'}
            value={actualKm}
            onChangeText={text => {
              text = text.replace(/\D/g, '');
              const km = parseInt(text);
              setActualKm(km.toLocaleString());
            }}
          />
        </Center>
        <UpdateKMButton>
          <MainButton size="small">Salvar</MainButton>
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
