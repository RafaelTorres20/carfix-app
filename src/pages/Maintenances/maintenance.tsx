import {FlatList, View} from 'react-native';
import {Center} from '../../components/Center';
import {MainButton} from '../../components/Buttons/MainButton';
import {CurrentKMBar, KMText, KMValue, UpdateKMButton} from './styles';
import {MaintenanceCard} from '../../components/MaintenanceCard';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {useMaintenance} from './useMaintenance';

export const Maintenances = () => {
  const {currentMileage, maintenances, handleSetMileage, handleChangeMileage} =
    useMaintenance();

  return (
    <View>
      <CurrentKMBar>
        <KMText>KM:</KMText>
        <Center style={{width: '40%'}}>
          <KMValue
            keyboardType="numbers-and-punctuation"
            defaultValue={currentMileage}
            value={currentMileage}
            onChangeText={handleChangeMileage}
          />
        </Center>
        <UpdateKMButton>
          <MainButton size="small" onPress={handleSetMileage}>
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
        data={maintenances ?? []}
        renderItem={({item}) => <MaintenanceCard maintenance={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
