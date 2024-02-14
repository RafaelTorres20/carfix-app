import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import Logo from '../../assets/logo.svg';
import {
  Content,
  ForgotPassword,
  Input,
  Label,
  LogoContainer,
  MainButton,
  SecondaryButton,
  Title,
} from './styles';
import {RFPercentage} from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';
export const Login = () => {
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
          <Label>Nome do usuário</Label>
          <Input
            style={{marginBottom: RFPercentage(4)}}
            placeholder="Digite seu nome de usuário"
          />
          <Label>Senha</Label>
          <Input
            style={{marginBottom: RFPercentage(1)}}
            placeholder="Digite sua senha"
            secureTextEntry
          />
          <ForgotPassword>
            <TouchableOpacity>
              <Text>Esqueci minha senha</Text>
            </TouchableOpacity>
          </ForgotPassword>
          <MainButton activeOpacity={0.8}>
            <Title style={{color: theme.colors.white}}>Entrar</Title>
          </MainButton>
          <SecondaryButton activeOpacity={0.8}>
            <Title style={{color: theme.colors.text}}>Criar conta</Title>
          </SecondaryButton>
        </Content>
      </View>
    </SafeAreaView>
  );
};
