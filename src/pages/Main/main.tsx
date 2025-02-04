import { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';
import {
    createNativeStackNavigator, NativeStackNavigationProp
} from '@react-navigation/native-stack';
import { useQuery } from '@tanstack/react-query';

import CalendarSVG from '../../assets/calendar.svg';
import DollarSVG from '../../assets/dollar.svg';
import MaintenanceSVG from '../../assets/maintenance.svg';
import Menu from '../../assets/menu.svg';
import Plus from '../../assets/plus.svg';
import { ButtonCircle } from '../../components/ButtonCircle';
import { useAuth } from '../../hooks/useAuth';
import { useCar } from '../../hooks/useCar';
import { getCarByUserID } from '../../services/car';
import theme from '../../styles/theme';
import { ICar } from '../../types/car';
import { Costs } from '../Costs';
import { Maintenances } from '../Maintenances';
import { Schedules } from '../Schedules';
import {
    CarName, Header, ImageCar, InfosContainer, MenuBar, MenuButton, MenuItem, Plate, PlateText
} from './styles';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

const MyStatusBar = ({backgroundColor}: {backgroundColor: string}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        barStyle={'dark-content'}
      />
    </SafeAreaView>
  </View>
);

const {Navigator, Screen} = createNativeStackNavigator();

export const Main = () => {
  const [page, setPage] = useState('Maintenance');
  const {setMyCar} = useCar();
  const {user} = useAuth();
  const userID = user.id;
  const token = user.token;
  const mainNavigation = useNavigation();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {
    data: car,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ['car', userID],
    queryFn: (): Promise<ICar[]> => getCarByUserID(userID, token),
  });
  useEffect(() => {
    if (isSuccess) {
      setMyCar(car[0]);
    }
  }, [isSuccess, car]);
  if (!isSuccess) {
    return <></>;
  }
  return (
    <SafeAreaProvider>
      <MyStatusBar backgroundColor="#fff" />
      <SafeAreaView style={{flex: 1}}>
        <Header>
          <ImageCar resizeMode="cover" source={{uri: car[0]?.photo}} />
          <MenuButton onPress={() => navigation.navigate('Menu' as never)}>
            <Menu fill={theme.colors.text} />
          </MenuButton>
        </Header>
        <InfosContainer>
          <CarName>{car[0]?.model ?? 'Nenhum veículo encontrado'}</CarName>
          <Plate>
            <PlateText>{car[0]?.plate ?? 'PLACA'}</PlateText>
          </Plate>
        </InfosContainer>
        <MenuBar>
          <MenuItem
            onPress={() => {
              setPage('Maintenance');
              navigation.navigate('Maintenance', {
                screen: 'Maintenance',
                initial: false,
              });
            }}>
            <MaintenanceSVG
              fill={
                page === 'Maintenance'
                  ? theme.colors.primary
                  : theme.colors.text
              }
            />
          </MenuItem>
          <MenuItem
            onPress={() => {
              setPage('Costs');
              navigation.navigate('Costs', {
                screen: 'Costs',
                initial: false,
              });
            }}>
            <DollarSVG
              fill={page === 'Costs' ? theme.colors.primary : theme.colors.text}
            />
          </MenuItem>
          <MenuItem
            onPress={() => {
              setPage('Schedules');
              navigation.navigate('Schedules', {
                screen: 'Schedules',
                initial: false,
              });
            }}>
            <CalendarSVG
              fill={
                page === 'Schedules' ? theme.colors.primary : theme.colors.text
              }
            />
          </MenuItem>
        </MenuBar>
        <View style={{flex: 1}}>
          <ButtonCircle.Root
            onPress={() => {
              mainNavigation.navigate(`Add${page}` as never);
            }}>
            <ButtonCircle.Icon
              icon={<Plus width={30} height={30} fill={theme.colors.white} />}
            />
          </ButtonCircle.Root>
          {isSuccess && !isLoading && (
            <Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <Screen name="Maintenance" component={Maintenances} />
              <Screen name="Costs" component={Costs} />
              <Screen name="Schedules" component={Schedules} />
            </Navigator>
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
