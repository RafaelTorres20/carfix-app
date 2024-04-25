import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
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
import {Input} from '../../components/Input';
import {MainButton} from '../../components/Buttons/MainButton';
import {SecondaryButton} from '../../components/Buttons/SecondaryButton';
import Prisma from '../../assets/prisma.jpg';

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

export const EditCar = () => {
  const {goBack} = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MyStatusBar backgroundColor={'transparent'} />
        <GoBackContainer>
          <GoBackStyled
            onPress={() => {
              goBack();
            }}
          />
        </GoBackContainer>
        <Head title="Editar veículo" size={RFPercentage(0.4)} />
        <ImageContainer>
          <ImageBackground
            resizeMode="cover"
            source={Prisma}
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
            label="Nome do vaículo"
            placeholder={'Digite o nome do veículo'}
          />
          <Input label="Placa" placeholder={'Digite sua placa'} />
          <Input
            label="Quilometragem atual do veículo"
            placeholder={'Digite a quilometragem atual do veículo'}
          />
          <MainButton style={{marginTop: RFPercentage(5)}}>Salvar</MainButton>
          <SecondaryButton
            onClick={() => {
              goBack();
            }}>
            Cancelar
          </SecondaryButton>
          <View style={{width: '100%', height: RFPercentage(10)}}></View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
