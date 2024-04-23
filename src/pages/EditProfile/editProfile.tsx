import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';
import {Head} from '../../components/Head';
import CameraIcon from '../../assets/camera.svg';
import {
  GoBackContainer,
  GoBackStyled,
  ImageContainer,
  InsideContent,
  InsideContentText,
  styles as ShadowStyles,
} from './styles';
import {Content} from '../../components/Content/content';
import {Input} from '../../components/Input';
import {MainButton} from '../../components/Buttons/MainButton';
import {SecondaryButton} from '../../components/Buttons/SecondaryButton';

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

export const EditProfile = () => {
  const {goBack} = useNavigation();
  return (
    <KeyboardAvoidingView>
      <SafeAreaView style={{backgroundColor: '#FFF', flex: 1}}>
        <MyStatusBar backgroundColor={'transparent'} />
        <GoBackContainer>
          <GoBackStyled
            onPress={() => {
              goBack();
            }}
          />
        </GoBackContainer>
        <Head title="Editar perfil" size={RFPercentage(0.4)} />
        <ImageContainer>
          <ImageBackground
            resizeMode="cover"
            source={{
              uri: 'https://media.fstatic.com/X_lwYFQmoObSDOsBPxAgU5nrxKE=/full-fit-in/640x480/filters:format(webp)/media/accounts/avatar/2012/11/74188b4648d55870ffece41023ebd036.jpg',
            }}
            imageStyle={{
              borderRadius: RFPercentage(100),
            }}
            style={ShadowStyles.shadow}>
            <InsideContent>
              <CameraIcon fill={theme.colors.white} />
              <InsideContentText>Alterar foto</InsideContentText>
            </InsideContent>
          </ImageBackground>
        </ImageContainer>
        <View style={{paddingHorizontal: RFPercentage(4)}}>
          <Input
            label="Nome de usuário"
            placeholder={'Digite seu nome de usuário'}
          />
          <Input label="E-mail" placeholder={'Digite seu e-mail'} />
          <Input label="Senha" placeholder={'Digite sua senha'} />
          <Input label="Confirmar senha" placeholder={'Confirmar senha'} />
          <MainButton>Salvar</MainButton>
          <SecondaryButton>Cancelar</SecondaryButton>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
