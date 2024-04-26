import {
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
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
import {
  DocumentPickerResponse,
  pick,
  pickSingle,
  types,
} from 'react-native-document-picker';
import {useState} from 'react';
import Toast from 'react-native-toast-message';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {addCar} from '../../services/car';
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

export const AddCar = () => {
  const {goBack} = useNavigation();
  const {user} = useAuth();
  const [form, setForm] = useState({
    name: '',
    plate: '',
    mileage: '',
    photo: {} as DocumentPickerResponse,
  });
  const queryClient = useQueryClient();
  const {mutateAsync} = useMutation({
    mutationKey: ['addCar', form],
    mutationFn: addCar,
    onSuccess: () => {
      Toast.show({
        type: 'success',
        text1: 'Veículo adicionado com sucesso! 🚗',
        text2: 'Você já pode começar a adicionar manutenções!',
      });
      queryClient.invalidateQueries({
        queryKey: ['getCarByUserID', user.id],
      });
      goBack();
    },
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
        <Head title="Adicionar veículo" size={RFPercentage(0.4)} />
        <ImageContainer
          onPress={async () => {
            try {
              const res = await pickSingle({
                type: [types.allFiles],
              });
              setForm({
                ...form,
                photo: res,
              });
            } catch (err) {
              Toast.show({
                type: 'error',
                text1: 'Erro ao selecionar imagem',
                text2: 'Verifique suas permissões e tente novamente',
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
            {!form.photo.uri && (
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
            onChangeText={text => {
              setForm({...form, name: text});
            }}
          />
          <Input
            label="Placa"
            placeholder={'Digite sua placa'}
            onChangeText={text => {
              setForm({...form, plate: text});
            }}
          />
          <Input
            label="Quilometragem atual do veículo"
            placeholder={'Digite a quilometragem atual do veículo'}
            onChangeText={text => {
              setForm({...form, mileage: text});
            }}
          />
          <MainButton
            style={{marginTop: RFPercentage(5)}}
            onPress={async () => {
              await mutateAsync({
                name: form.name,
                plate: form.plate,
                mileage: form.mileage,
                photo: form.photo, // Access the uri property of form.photo and cast it as File type
                token: user.token,
                userID: user.id,
              });
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
