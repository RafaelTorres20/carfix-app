import {View, Text, SafeAreaView} from 'react-native';
import {Buttons, Content, HeadTitle, Title} from './styles';
import {Head} from '../../components/Head';
import {Input} from '../../components/Input';
import {MainButton} from '../../components/Buttons/MainButton';
import {SecondaryButton} from '../../components/Buttons/SecondaryButton';
import {useNavigation} from '@react-navigation/native';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const Forgot = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Head size={RFPercentage(0.6)} title="Esqueceu a senha?" />
      <Content>
        <Input label="E-mail" placeholder="Digite seu e-mail" />
        <Buttons>
          <MainButton>Enviar email de recuperação</MainButton>
          <SecondaryButton
            onClick={() => navigation.navigate('Login' as never)}>
            Cancelar
          </SecondaryButton>
        </Buttons>
      </Content>
    </SafeAreaView>
  );
};
