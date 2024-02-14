import {View, Text, SafeAreaView} from 'react-native';
import {Head} from '../../components/Head';
import {Input} from '../../components/Input';
import {Content} from '../../components/Content/content';
import {MainButton} from '../../components/Buttons/MainButton';
import {SecondaryButton} from '../../components/Buttons/SecondaryButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';

export const Register = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Head title="Criar conta" />
      <Content>
        <Input
          label="Nome de usuário"
          placeholder="Digite seu nome de usuário"
        />
        <Input label="E-mail" placeholder="Digite seu e-mail" />
        <Input secure label="Senha" placeholder="Digite sua senha" />
        <Input
          secure
          label="Confirme sua senha"
          placeholder="Digite sua senha novamente"
        />
        <MainButton>Criar conta</MainButton>
        <SecondaryButton onClick={() => navigation.navigate('Login' as never)}>
          Cancelar
        </SecondaryButton>
      </Content>
    </SafeAreaView>
  );
};
