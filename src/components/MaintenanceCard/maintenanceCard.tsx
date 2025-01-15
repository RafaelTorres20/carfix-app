import { Platform } from 'react-native';
import * as Progress from 'react-native-progress';
import { RFPercentage } from 'react-native-responsive-fontsize';

import theme from '../../styles/theme';
import { IMaintenance } from '../../types/maintenance';
import { ArrowButton } from '../ArrowButton';
import { Center } from '../Center';
import {
    Card, CardTitle, Line, NextKM, Percentual, PreviousKM, TextCard, TitleContent
} from './styles';
import { useMaintenanceCard } from './useMaintenanceCard';

export const MaintenanceCard = ({maintenance}: {maintenance: IMaintenance}) => {
  const {formatPercentage, progress, setColor, navigate} =
    useMaintenanceCard(maintenance);
  return (
    <Card
      style={{
        shadowColor: theme.colors.backgroundButton,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 10,
      }}>
      <Line>
        <TitleContent>
          <CardTitle>{maintenance.name}</CardTitle>
        </TitleContent>
        <ArrowButton
          onPress={() => navigate('EditMaintenance', {maintenance})}
        />
      </Line>
      <Line>
        <PreviousKM>
          <TextCard style={{fontSize: RFPercentage(2.5)}}>
            {maintenance.lastMileage} km
          </TextCard>
          <TextCard style={{fontSize: RFPercentage(2)}}>Última troca</TextCard>
        </PreviousKM>
        <NextKM>
          <TextCard style={{fontSize: RFPercentage(2.5)}}>
            {maintenance.nextMileage} km
          </TextCard>
          <TextCard style={{fontSize: RFPercentage(2)}}>Próxima troca</TextCard>
        </NextKM>
      </Line>
      <Line>
        <Progress.Bar
          progress={progress}
          animated={true}
          borderRadius={RFPercentage(100)}
          color={setColor(progress)}
          unfilledColor={theme.colors.backgroundButton}
          borderColor={theme.colors.backgroundButton}
          width={Platform.OS === 'ios' ? RFPercentage(35) : RFPercentage(40)}
          height={RFPercentage(2.5)}
          style={{marginBottom: RFPercentage(2)}}>
          <Center style={{position: 'absolute', left: '45%'}}>
            <Percentual>{formatPercentage(progress)}%</Percentual>
          </Center>
        </Progress.Bar>
      </Line>
    </Card>
  );
};
