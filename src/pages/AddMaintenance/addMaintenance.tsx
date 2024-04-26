import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Content} from './styles';
import {Input} from '../../components/Input';
import {MainButton} from '../../components/Buttons/MainButton';
import {SecondaryButton} from '../../components/Buttons/SecondaryButton';
import {GoBackButton} from '../../components/GoBackButton/GoBack';
import {Head} from '../../components/Head';
import Toast from 'react-native-toast-message';
import {useAddMaintenance} from './useAddMaintenance';

export const AddMaintenance = () => {
  const {car, form, mutateAsync, navigation, queryClient, setForm, user} =
    useAddMaintenance();
  return (
    <SafeAreaView>
      <View>
        <Content>
          <GoBackButton onPress={() => navigation.goBack()} />
          <Head size={3.3} title="Adicionar manutenção"></Head>
          <Input
            label="Nome da manutenção:"
            placeholder="ex: filtro de óleo"
            onChangeText={text => setForm({...form, name: text})}
          />
          <Input
            label="Quilometragem da última manutenção:"
            placeholder="ex: 100.000"
            onChangeText={text => setForm({...form, lastMaintenance: text})}
          />
          <Input
            label="Quilometragem da próxima manutenção:"
            placeholder="ex: 100.000"
            onChangeText={text => setForm({...form, nextMaintenance: text})}
          />
          <MainButton
            onPress={async () => {
              try {
                await mutateAsync({...form, carID: car.id, token: user.token});
                queryClient.invalidateQueries({queryKey: ['getMaintenances']});
                Toast.show({
                  type: 'success',
                  text1: 'Manutenção adicionada com sucesso!',
                });
                navigation.goBack();
              } catch (error) {
                Toast.show({
                  type: 'error',
                  text1: 'Erro ao adicionar manutenção',
                  text2: 'Verifique seus dados e tente novamente',
                });
              }
            }}>
            Adicionar
          </MainButton>
          <SecondaryButton onClick={() => navigation.goBack()}>
            Cancelar
          </SecondaryButton>
        </Content>
      </View>
    </SafeAreaView>
  );
};
