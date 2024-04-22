import {SafeAreaView, View, StatusBar, StyleSheet} from 'react-native';
import Menu from '../../assets/menu.svg';
import MaintenanceSVG from '../../assets/maintenance.svg';
import DollarSVG from '../../assets/dollar.svg';
import CalendarSVG from '../../assets/calendar.svg';
import Prisma from '../../assets/prisma.jpg';
import Plus from '../../assets/plus.svg';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  CarName,
  Header,
  ImageCar,
  InfosContainer,
  MenuBar,
  MenuButton,
  MenuItem,
  Plate,
  PlateText,
} from './styles';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Maintenances} from '../Maintenances';
import {Costs} from '../Costs';
import {Schedules} from '../Schedules';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import theme from '../../styles/theme';
import {ButtonCircle} from '../../components/ButtonCircle';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

const MyStatusBar = ({backgroundColor}: {backgroundColor: string}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} />
    </SafeAreaView>
  </View>
);

const {Navigator, Screen} = createNativeStackNavigator();

export const Main = () => {
  const [page, setPage] = useState('Maintenance');
  const mainNavigation = useNavigation();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <SafeAreaProvider>
      <MyStatusBar backgroundColor="#fff" />
      <SafeAreaView style={{flex: 1}}>
        <Header>
          <ImageCar resizeMode="contain" source={Prisma} />
          <MenuButton>
            <Menu fill={theme.colors.text} />
          </MenuButton>
        </Header>
        <InfosContainer>
          <CarName>Prisma Joy 10MT</CarName>
          <Plate>
            <PlateText>QQI7A93</PlateText>
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
          <Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Screen name="Maintenance" component={Maintenances} />
            <Screen name="Costs" component={Costs} />
            <Screen name="Schedules" component={Schedules} />
          </Navigator>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
