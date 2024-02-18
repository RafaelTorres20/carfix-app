import {View} from 'react-native';
import {CardContainer, CardTitle, CardDate, ValueText} from './styles';
import {RFPercentage} from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';

export const CostCard = () => {
  return (
    <CardContainer
      style={{
        elevation: 5,
        shadowColor: theme.colors.backgroundButton,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 5,
      }}>
      <View>
        <CardTitle>Manutenção</CardTitle>
        <CardDate>15/01/2024</CardDate>
      </View>
      <View
        style={{
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          height: RFPercentage(10),
        }}>
        <ValueText>210,00R$</ValueText>
      </View>
    </CardContainer>
  );
};
