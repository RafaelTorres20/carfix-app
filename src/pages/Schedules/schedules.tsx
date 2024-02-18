import {ScrollView, Text, View} from 'react-native';
import {Center} from '../../components/Center';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {RFPercentage} from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['pt'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
  dayNames: [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje',
};
LocaleConfig.defaultLocale = 'pt';
export const Schedules = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: RFPercentage(2),
        width: '100%',
        overflow: 'hidden',
      }}>
      <View
        style={{
          width: '80%',
          borderRadius: RFPercentage(2),
          overflow: 'hidden',
          backgroundColor: theme.colors.background,
          shadowColor: theme.colors.backgroundButton,
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 1,
          shadowRadius: 5,
          elevation: 5,
        }}>
        <Calendar
          onDayPress={day => {
            console.log('selected day', day);
          }}
          enableSwipeMonths
          theme={{
            todayTextColor: theme.colors.primary,
            arrowColor: theme.colors.primary,
            monthTextColor: theme.colors.primary,
            indicatorColor: theme.colors.primary,
            textDayFontSize: RFPercentage(2),
            textMonthFontSize: RFPercentage(3),
            textDayHeaderFontSize: RFPercentage(2),
          }}
        />
      </View>
    </ScrollView>
  );
};
