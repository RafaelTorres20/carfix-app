import { SafeAreaView, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { RFPercentage } from 'react-native-responsive-fontsize';

import CheckBox from '@react-native-community/checkbox';

import { MainButton } from '../../components/Buttons/MainButton';
import { SecondaryButton } from '../../components/Buttons/SecondaryButton';
import { GoBackButton } from '../../components/GoBackButton/GoBack';
import { HeadInput } from '../../components/HeadInput';
import { Input } from '../../components/Input';
import theme from '../../styles/theme';
import { CheckBoxContainer, Content } from './styles';
import { useEditMaintenance } from './useEditMaintenance';

export const EditMaintenance = () => {
  const height = useSharedValue<number>(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  }, []);

  const {
    toggleCheckBox,
    navigation,
    maintenance,
    car,
    form,
    isEditing,
    isDeleting,
    setForm,
    setToggleCheckBox,
    onChangeCost,
    onChangeLastMileage,
    onChangeNextMileage,
    remove,
    edit,
  } = useEditMaintenance();

  return (
    <SafeAreaView>
      <View>
        <Content>
          <GoBackButton onPress={() => navigation.goBack()} />
          <HeadInput
            size={4}
            multiline={true}
            title={maintenance.name}
            onChangeText={text => setForm({...form, name: text})}
            placeholder={'Ex: Filtro de óleo'}
          />
          <Input
            label="Alterar quilometragem da próxima troca:"
            placeholder="ex: 190.000 km"
            defaultValue={maintenance.nextMileage.toLocaleString()}
            onChangeText={onChangeNextMileage}
            value={form.nextMaintenance}
          />
          <CheckBoxContainer style={{marginBottom: RFPercentage(2)}}>
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
              onValueChange={value => {
                setToggleCheckBox(value);
                height.value = withSpring(value ? RFPercentage(25) : 0, {
                  damping: 20,
                  stiffness: 100,
                  restSpeedThreshold: 0.1,
                });
              }}
            />
            <Text
              style={{color: theme.colors.text, marginLeft: RFPercentage(2)}}>
              Foi feita uma manutenção nova?
            </Text>
          </CheckBoxContainer>
          <Animated.View
            style={[{width: '100%', overflow: 'hidden'}, animatedStyle]}>
            <Input
              label="Quilometragem atual do veículo:"
              placeholder="ex: 100.000 km"
              defaultValue={car.currentMileage.toLocaleString()}
              onChangeText={onChangeLastMileage}
              value={form.lastMaintenance}
            />
            <Input
              label="Valor gasto na manutenção:"
              value={form.maintenanceCost}
              placeholder="ex: R$500,00"
              onChangeText={onChangeCost}
            />
          </Animated.View>
          <MainButton isLoading={isEditing} onPress={edit}>
            Editar
          </MainButton>

          <SecondaryButton
            isLoading={isDeleting}
            color={theme.colors.white}
            style={{
              backgroundColor: theme.colors.red,
              marginTop: RFPercentage(2),
            }}
            onClick={remove}>
            Excluir
          </SecondaryButton>
          <SecondaryButton onClick={() => navigation.goBack()}>
            Cancelar
          </SecondaryButton>
        </Content>
      </View>
    </SafeAreaView>
  );
};
