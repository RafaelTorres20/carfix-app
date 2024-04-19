import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Center} from '../../components/Center';
import {Calendar, CalendarUtils} from 'react-native-calendars';
import {RFPercentage} from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';
import {LocaleConfig} from 'react-native-calendars';
import {useState} from 'react';

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
  const [selectedDay, setSelectedDay] = useState(null);
  const scheduledDates = ['2024-02-15', '2021-09-16', '2021-09-17'];
  const getDate = (count: number) => {
    const date = new Date();
    const newDate = date.setDate(date.getDate() + count);
    return CalendarUtils.getCalendarDateString(newDate);
  };
  const changeColorTextByState = (state: string, date: any) => {
    const object = {
      today: {
        color: theme.colors.primary,
        backgroundColor: theme.colors.background,
      },
      disabled: {
        color: theme.colors.backgroundButton,
        backgroundColor: theme.colors.background,
      },
      selected: {
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
      },
      scheduled: {
        color: theme.colors.white,
        backgroundColor: theme.colors.info,
      },
      default: {
        color: theme.colors.text,
        backgroundColor: theme.colors.background,
      },
    };
    if (state === 'today') {
      return object.today;
    }
    if (state === 'disabled') {
      return object.disabled;
    }
    if (date.dateString === selectedDay) {
      return object.selected;
    }
    if (scheduledDates.includes(date.dateString)) {
      return object.scheduled;
    }
    return object.default;
  };
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
          onDayPress={(day: any) => {
            setSelectedDay(day.dateString);
          }}
          markedDates={{
            [getDate(2)]: {
              dotColor: 'red',
              marked: true,
            },
          }}
          enableSwipeMonths
          dayComponent={({date, state}: any) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setSelectedDay(date.dateString);
                }}
                style={{
                  width: RFPercentage(4),
                  height: RFPercentage(4),
                  borderRadius: RFPercentage(5),
                  backgroundColor: changeColorTextByState(state, date)
                    .backgroundColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: changeColorTextByState(state, date).color,
                    fontSize: RFPercentage(2.5),
                  }}>
                  {date.day}
                </Text>
              </TouchableOpacity>
            );
          }}
          theme={{
            todayTextColor: theme.colors.primary,
            arrowColor: theme.colors.primary,
            monthTextColor: theme.colors.text,
            textMonthFontWeight: 'bold',
            indicatorColor: theme.colors.primary,
            selectedDayBackgroundColor: theme.colors.primary,
            selectedDayTextColor: theme.colors.primary,
            textDayFontSize: RFPercentage(2),
            textMonthFontSize: RFPercentage(2.5),
            textDayHeaderFontSize: RFPercentage(2),
          }}
        />
      </View>
    </ScrollView>
  );
};
