import {FlatList, Text, View} from 'react-native';
import {Center} from '../../components/Center';
import {MainButton} from '../../components/Buttons/MainButton';
import {CurrentKMBar, KMText, KMValue, UpdateKMButton} from './styles';
import {MaintenanceCard} from '../../components/MaintenanceCard';
import theme from '../../styles/theme';

export const Maintenances = () => {
  return (
    <View>
      <CurrentKMBar>
        <KMText>KM:</KMText>
        <Center style={{width: '40%'}}>
          <KMValue keyboardType="numbers-and-punctuation" />
        </Center>
        <UpdateKMButton>
          <MainButton size="small">Salvar</MainButton>
        </UpdateKMButton>
      </CurrentKMBar>
      <FlatList
        contentContainerStyle={{
          alignItems: 'center',
          paddingVertical: 30,
          backgroundColor: theme.colors.white,
        }}
        data={[1, 2, 3, 4, 5]}
        renderItem={({item}) => <MaintenanceCard />}
        keyExtractor={item => item.toString()}
      />
    </View>
  );
};
