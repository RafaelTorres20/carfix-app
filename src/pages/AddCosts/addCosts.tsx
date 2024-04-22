import React, {useState} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Button} from 'react-native';
import {Content, ForgotPassword, Title} from './styles';
import {Input} from '../../components/Input';
import {MainButton} from '../../components/Buttons/MainButton';
import {SecondaryButton} from '../../components/Buttons/SecondaryButton';
import {useNavigation} from '@react-navigation/native';
import {GoBackButton} from '../../components/GoBackButton/GoBack';
import {Head} from '../../components/Head';
import {RFPercentage} from 'react-native-responsive-fontsize';
import DatePicker from 'react-native-date-picker';
import theme from '../../styles/theme';

export const AddCosts = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <SafeAreaView>
      <View>
        <Content>
          <GoBackButton onPress={() => navigation.goBack()} />
          <Head size={RFPercentage(0.5)} title="Adicionar despesa"></Head>
          <Input label="Nome da despesa:" placeholder="Ex: Filtro de óleo" />
          <Input label="Valor da despesa:" placeholder="Ex: R$500.00" />
          <TouchableOpacity
            style={{width: '100%'}}
            activeOpacity={0.8}
            onPress={() => setOpen(true)}>
            <Input
              label="Data:"
              placeholder=""
              value={date.toLocaleDateString('pt-BR').split('T')[0]}
              onPressIn={() => setOpen(true)}
              onAccessibilityTap={() => setOpen(true)}
              onTouchStart={() => setOpen(true)}
              editable={false}
            />
          </TouchableOpacity>
          <DatePicker
            modal
            mode="date"
            locale="pt-br"
            title={'Selecione a data'}
            open={open}
            date={date}
            confirmText="Confirmar"
            cancelText="Cancelar"
            buttonColor={theme.colors.primary}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
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
