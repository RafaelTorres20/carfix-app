import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {GoBackButton} from '../../components/GoBackButton/GoBack';
import {Content} from '../../components/Content/content';
import {useNavigation} from '@react-navigation/native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';
import {Head} from '../../components/Head';
import {MenuButton} from '../../components/Buttons/MenuButton/menuButton';
import EditProfileIcon from '../../assets/edit-profile.svg';
import EditVehicle from '../../assets/edit-vehicle.svg';
import AddVehicle from '../../assets/add-vehicle.svg';
import SignOut from '../../assets/signout.svg';
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
        barStyle={'default'}
      />
    </SafeAreaView>
  </View>
);

export const Menu = () => {
  const {goBack} = useNavigation();
  return (
    <>
      <SafeAreaView style={{backgroundColor: '#FFF'}}>
        <MyStatusBar backgroundColor={'transparent'} />
        <View
          style={{
            width: '100%',
            alignItems: 'flex-end',
          }}>
          <GoBackButton
            onPress={() => {
              goBack();
            }}
            style={{
              transform: [{rotate: '180deg'}],
              marginRight: RFPercentage(5),
              marginTop: RFPercentage(2.5),
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
          <View
            style={{
              borderRadius: RFPercentage(100),
              shadowColor: theme.colors.text,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 10,
            }}>
            <Image
              source={{
                uri: 'https://media.fstatic.com/X_lwYFQmoObSDOsBPxAgU5nrxKE=/full-fit-in/640x480/filters:format(webp)/media/accounts/avatar/2012/11/74188b4648d55870ffece41023ebd036.jpg',
              }}
              style={{
                width: RFPercentage(25),
                height: RFPercentage(25),
                resizeMode: 'cover',
                borderRadius: RFPercentage(100),
              }}
            />
          </View>
        </View>
        <Head title="Rafael Torres" size={RFPercentage(0.4)} />
      </SafeAreaView>
      <Content style={{flex: 0.9, justifyContent: 'space-between'}}>
        <View>
          <MenuButton
            text="Editar Perfil"
            icon={
              <EditProfileIcon
                width={RFPercentage(3)}
                height={RFPercentage(3)}
                fontWeight={'bold'}
                fill={theme.colors.text}
              />
            }
            onPress={() => {}}
          />
          <MenuButton
            text="Adicionar Veículo"
            icon={
              <AddVehicle
                width={RFPercentage(3)}
                height={RFPercentage(3)}
                fontWeight={'bold'}
                fill={theme.colors.text}
              />
            }
            onPress={() => {}}
          />
          <MenuButton
            text="Editar Veículo"
            icon={
              <EditVehicle
                width={RFPercentage(3)}
                height={RFPercentage(3)}
                fontWeight={'bold'}
                fill={theme.colors.text}
              />
            }
            onPress={() => {}}
          />
        </View>
        <MenuButton
          backgroundColor={theme.colors.error}
          text="Sair"
          icon={
            <SignOut
              width={RFPercentage(3)}
              height={RFPercentage(3)}
              fontWeight={'bold'}
              fill={theme.colors.red}
            />
          }
          onPress={() => {}}
        />
      </Content>
    </>
  );
};
