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
import {useCar} from '../../hooks/useCar';
import {useState} from 'react';
import {
  DocumentPickerResponse,
  pickSingle,
  types,
} from 'react-native-document-picker';
import Toast from 'react-native-toast-message';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {editCar} from '../../services/car';
import {useAuth} from '../../hooks/useAuth';

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
  const {car} = useCar();
  const {user} = useAuth();
  const queryClient = useQueryClient();
  const [form, setForm] = useState({
    model: car.model,
    plate: car.plate,
    currentMileage: car.currentMileage.toLocaleString(),
    photo: {uri: car.photo} as DocumentPickerResponse,
  });
  const {mutateAsync} = useMutation({
    mutationKey: ['editCar', car.id],
    mutationFn: editCar,
  });
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
        <ImageContainer
          onPress={async () => {
            try {
              const res = await pickSingle({
                type: [types.images],
              });
              setForm({...form, photo: res});
            } catch (e) {
              Toast.show({
                type: 'error',
                text1: 'Erro ao selecionar imagem',
                text2: 'Tente novamente',
              });
            }
          }}>
          <ImageBackground
            resizeMode="cover"
            source={form.photo.uri ? {uri: form.photo.uri} : Prisma}
            imageStyle={{
              borderRadius: RFPercentage(100),
            }}
            style={ShadowStyles.shadow}>
            {!form.photo.name && (
              <InsideContent>
                <CameraIcon fill={theme.colors.white} />
                <InsideContentText>Alterar foto</InsideContentText>
              </InsideContent>
            )}
          </ImageBackground>
        </ImageContainer>
        <View style={{paddingHorizontal: RFPercentage(4)}}>
          <Input
            label="Nome do vaículo"
            placeholder={'Digite o nome do veículo'}
            defaultValue={car.model}
            onChangeText={text => {
              setForm({...form, model: text});
            }}
          />
          <Input
            label="Placa"
            placeholder={'Digite sua placa'}
            defaultValue={car.plate}
            onChangeText={text => {
              setForm({...form, plate: text});
            }}
          />
          <Input
            label="Quilometragem atual do veículo"
            placeholder={'Digite a quilometragem atual do veículo'}
            defaultValue={car.currentMileage.toLocaleString()}
            onChangeText={text => {
              text = text.replace(/\D/g, '');
              const number = parseInt(text);
              setForm({...form, currentMileage: number.toLocaleString()});
            }}
          />
          <MainButton
            style={{marginTop: RFPercentage(5)}}
            onPress={async () => {
              try {
                await mutateAsync({
                  ...form,
                  token: user.token,
                  carID: car.id,
                  name: form.model,
                  mileage: form.currentMileage,
                  userID: user.id,
                });
                goBack();
                Toast.show({
                  type: 'success',
                  text1: 'Veículo editado com sucesso',
                });
                queryClient.invalidateQueries({
                  queryKey: ['car', user.id],
                });
              } catch (error) {
                Toast.show({
                  type: 'error',
                  text1: 'Erro ao editar veículo',
                  text2: 'Verifique seus dados e tente novamente',
                });
              }
            }}>
            Salvar
          </MainButton>
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
function userAuth(): {user: any} {
  throw new Error('Function not implemented.');
}
