import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {CheckBoxContainer, Content} from './styles';
import {Input} from '../../components/Input';
import {MainButton} from '../../components/Buttons/MainButton';
import {SecondaryButton} from '../../components/Buttons/SecondaryButton';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {GoBackButton} from '../../components/GoBackButton/GoBack';
import {Head} from '../../components/Head';
import {RFPercentage} from 'react-native-responsive-fontsize';
import CheckBox from '@react-native-community/checkbox';
import {Text} from 'react-native';
import theme from '../../styles/theme';
import {IMaintenance} from '../../types/maintenance';
import {useCar} from '../../hooks/useCar';
type RootStackParamList = {
  EditMaintenance: {maintenance: IMaintenance}; // Substitua isso pelos parâmetros que você está passando para a rota
  // Adicione outras rotas aqui
};

// Use RouteProp com RootStackParamList e o nome da rota para tipar `route`
type EditMaintenanceRouteProp = RouteProp<
  RootStackParamList,
  'EditMaintenance'
>;

export const EditMaintenance = () => {
  const navigation = useNavigation();
  const {
    params: {maintenance},
  } = useRoute<EditMaintenanceRouteProp>();
  const {car} = useCar();

  console.log('Params', maintenance);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <SafeAreaView>
      <View>
        <Content>
          <GoBackButton onPress={() => navigation.goBack()} />
          <Head size={4} title={maintenance.name} />
          <Input
            label="Alterar quilometragem da próxima troca:"
            placeholder="ex: 190.000"
            defaultValue={maintenance.nextMileage.toLocaleString()}
          />
          <CheckBoxContainer>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onTintColor={theme.colors.primary}
              onCheckColor={theme.colors.primary}
              tintColor={theme.colors.primary}
              boxType="square"
              tintColors={{
                true: theme.colors.primary,
                false: theme.colors.text,
              }}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text
              style={{color: theme.colors.text, marginLeft: RFPercentage(2)}}>
              Foi feita uma manutenção nova?
            </Text>
          </CheckBoxContainer>
          <Input
            label="Quilometragem atual do veículo:"
            placeholder="ex: 100.000"
            defaultValue={car.currentMileage.toLocaleString()}
          />
          <Input label="Valor gasto na manutenção:" placeholder="ex: 500" />
          <MainButton>Adicionar</MainButton>
          <SecondaryButton onClick={() => navigation.goBack()}>
            Cancelar
          </SecondaryButton>
        </Content>
      </View>
    </SafeAreaView>
  );
};
