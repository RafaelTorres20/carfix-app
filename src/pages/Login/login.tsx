import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Logo from '../../assets/logo.svg';
import {Content, ForgotPassword, LogoContainer, Title} from './styles';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {Input} from '../../components/Input';
import {MainButton} from '../../components/Buttons/MainButton';
import {SecondaryButton} from '../../components/Buttons/SecondaryButton';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../hooks/useAuth';
import {API_BASE_URL} from 'react-native-dotenv';
export const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('rafael12@gmail.com');
  const [password, setPassword] = React.useState('aT@123df');
  const {signIn} = useAuth();
  return (
    <SafeAreaView>
      <View>
        <LogoContainer>
          <Logo
            width={`${RFPercentage(30)}px`}
            height={`${RFPercentage(30)}px`}
          />
        </LogoContainer>
        <Content>
          <Title>Entrar</Title>
          <Input
            onChangeText={setUsername}
            label="Nome de usuário"
            defaultValue="rafael12@gmail.com"
            placeholder="Digite seu nome de usuário"
          />
          <Input
            onChangeText={setPassword}
            // secure
            defaultValue="aT@123df"
            label="Senha"
            placeholder="Digite sua senha"
          />
          <ForgotPassword>
            <TouchableOpacity
              onPress={() => navigation.navigate('Forgot' as never)}>
              <Text>Esqueci minha senha</Text>
            </TouchableOpacity>
          </ForgotPassword>
          <MainButton
            onPress={() => {
              signIn(username, password);
            }}>
            Entrar
          </MainButton>
          <SecondaryButton
            onClick={() => navigation.navigate('Register' as never)}>
            Criar conta
          </SecondaryButton>
        </Content>
      </View>
    </SafeAreaView>
  );
};
