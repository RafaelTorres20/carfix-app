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

export const MaintenanceCard = () => {
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
          <CardTitle>Filtro de óleo</CardTitle>
        </TitleContent>
        <ArrowButton />
      </Line>
      <Line>
        <PreviousKM>
          <TextCard style={{fontSize: RFPercentage(2.5)}}>119.000KM</TextCard>
          <TextCard style={{fontSize: RFPercentage(2)}}>Última troca</TextCard>
        </PreviousKM>
        <NextKM>
          <TextCard style={{fontSize: RFPercentage(2.5)}}>130.000KM</TextCard>
          <TextCard style={{fontSize: RFPercentage(2)}}>Próxima troca</TextCard>
        </NextKM>
      </Line>
      <Line>
        <Progress.Bar
          progress={0.5}
          animated={true}
          borderRadius={RFPercentage(100)}
          color={theme.colors.primary}
          unfilledColor={theme.colors.backgroundButton}
          borderColor={theme.colors.backgroundButton}
          width={RFPercentage(40)}
          height={RFPercentage(2.5)}
          style={{marginBottom: RFPercentage(2)}}>
          <Center style={{position: 'absolute', left: '45%'}}>
            <Percentual>30%</Percentual>
          </Center>
        </Progress.Bar>
      </Line>
    </Card>
  );
};
