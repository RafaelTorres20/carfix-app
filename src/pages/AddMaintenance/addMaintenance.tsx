import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {Content, ForgotPassword, Title} from './styles';
import {Input} from '../../components/Input';
import {MainButton} from '../../components/Buttons/MainButton';
import {SecondaryButton} from '../../components/Buttons/SecondaryButton';
import {useNavigation} from '@react-navigation/native';
import {GoBackButton} from '../../components/GoBackButton/GoBack';
import {Head} from '../../components/Head';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const AddMaintenance = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <Content>
          <GoBackButton onPress={() => navigation.goBack()} />
          <Head size={3.3} title="Adicionar manutenção"></Head>
          <Input label="Nome da manutenção:" placeholder="ex: filtro de óleo" />
          <Input
            label="Quilometragem atual do veículo:"
            placeholder="ex: 100.000"
          />
          <Input
            label="Quilometragem da próxima troca:"
            placeholder="ex: 100.000"
          />
          <MainButton>Adicionar</MainButton>
          <SecondaryButton onClick={() => navigation.goBack()}>
            Cancelar
          </SecondaryButton>
        </Content>
      </View>
    </SafeAreaView>
  );
};
