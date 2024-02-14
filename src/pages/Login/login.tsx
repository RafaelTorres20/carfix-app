import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Logo from '../../assets/logo.svg';
import {Content, ForgotPassword, LogoContainer, Title} from './styles';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {Input} from '../../components/Input';
import {MainButton} from '../../components/Buttons/MainButton';
import {SecondaryButton} from '../../components/Buttons/SecondaryButton';
import {useNavigation} from '@react-navigation/native';
export const Login = () => {
  const navigation = useNavigation();
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
            label="Nome de usuário"
            placeholder="Digite seu nome de usuário"
          />
          <Input secure label="Senha" placeholder="Digite sua senha" />
          <ForgotPassword>
            <TouchableOpacity
              onPress={() => navigation.navigate('Forgot' as never)}>
              <Text>Esqueci minha senha</Text>
            </TouchableOpacity>
          </ForgotPassword>
          <MainButton>Entrar</MainButton>
          <SecondaryButton
            onClick={() => navigation.navigate('Register' as never)}>
            Criar conta
          </SecondaryButton>
        </Content>
      </View>
    </SafeAreaView>
  );
};
