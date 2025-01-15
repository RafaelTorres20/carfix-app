import { SafeAreaView, View } from 'react-native';

import { MainButton } from '../../components/Buttons/MainButton';
import { SecondaryButton } from '../../components/Buttons/SecondaryButton';
import { GoBackButton } from '../../components/GoBackButton/GoBack';
import { Head } from '../../components/Head';
import { Input } from '../../components/Input';
import { Content } from './styles';
import { useAddMaintenance } from './useAddMaintenance';

export const AddMaintenance = () => {
  const {form, navigation, setForm, isAdding, createMaintenance} =
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
            isLoading={isAdding}
            onPress={async () => {
              await createMaintenance();
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
