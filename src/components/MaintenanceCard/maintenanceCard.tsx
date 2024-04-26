import React from 'react';
import {ArrowButton} from '../ArrowButton';
import * as Progress from 'react-native-progress';
import {
  Card,
  CardTitle,
  Line,
  NextKM,
  Percentual,
  PreviousKM,
  TextCard,
  TitleContent,
} from './styles';
import theme from '../../styles/theme';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {Center} from '../Center';
import {useNavigation} from '@react-navigation/native';
import {Platform} from 'react-native';
import {IMaintenance} from '../../types/maintenance';
import {useCar} from '../../hooks/useCar';

export const MaintenanceCard = ({maintenance}: {maintenance: IMaintenance}) => {
  const {navigate} = useNavigation();
  const {car} = useCar();
  const progress =
    (car.currentMileage - maintenance.lastMileage) /
    (maintenance.nextMileage - maintenance.lastMileage);
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
        <ArrowButton onPress={() => navigate('EditMaintenance' as never)} />
      </Line>
      <Line>
        <PreviousKM>
          <TextCard style={{fontSize: RFPercentage(2.5)}}>
            {maintenance.lastMileage}KM
          </TextCard>
          <TextCard style={{fontSize: RFPercentage(2)}}>Última troca</TextCard>
        </PreviousKM>
        <NextKM>
          <TextCard style={{fontSize: RFPercentage(2.5)}}>
            {maintenance.nextMileage}KM
          </TextCard>
          <TextCard style={{fontSize: RFPercentage(2)}}>Próxima troca</TextCard>
        </NextKM>
      </Line>
      <Line>
        <Progress.Bar
          progress={progress}
          animated={true}
          borderRadius={RFPercentage(100)}
          color={theme.colors.primary}
          unfilledColor={theme.colors.backgroundButton}
          borderColor={theme.colors.backgroundButton}
          width={Platform.OS === 'ios' ? RFPercentage(35) : RFPercentage(40)}
          height={RFPercentage(2.5)}
          style={{marginBottom: RFPercentage(2)}}>
          <Center style={{position: 'absolute', left: '45%'}}>
            <Percentual>{(progress * 100).toFixed(1)}%</Percentual>
          </Center>
        </Progress.Bar>
      </Line>
    </Card>
  );
};
