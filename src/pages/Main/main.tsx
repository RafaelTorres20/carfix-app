import {SafeAreaView, View, StatusBar, StyleSheet} from 'react-native';
import Menu from '../../assets/menu.svg';
import MaintenanceSVG from '../../assets/maintenance.svg';
import DollarSVG from '../../assets/dollar.svg';
import CalendarSVG from '../../assets/calendar.svg';
import Prisma from '../../assets/prisma.jpg';
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
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <SafeAreaProvider>
      <MyStatusBar backgroundColor="#fff" />
      <SafeAreaView style={{flex: 1}}>
        <Header>
          <ImageCar resizeMode="contain" source={Prisma} />
          <MenuButton>
            <Menu />
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
              navigation.navigate('Maintenance', {
                screen: 'Maintenance',
                initial: false,
              });
            }}>
            <MaintenanceSVG />
          </MenuItem>
          <MenuItem
            onPress={() => {
              navigation.navigate('Costs', {
                screen: 'Costs',
                initial: false,
              });
            }}>
            <DollarSVG />
          </MenuItem>
          <MenuItem
            onPress={() => {
              navigation.navigate('Schedules', {
                screen: 'Schedules',
                initial: false,
              });
            }}>
            <CalendarSVG />
          </MenuItem>
        </MenuBar>
        <View style={{flex: 1}}>
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
