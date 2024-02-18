import {Text, View} from 'react-native';
import {Center} from '../../components/Center';
import {BarChart} from 'react-native-gifted-charts';
import {RFPercentage} from 'react-native-responsive-fontsize';
import theme from '../../styles/theme';
import {useState} from 'react';
const barData = [
  {value: 500, label: 'Fev', frontColor: theme.colors.text},
  {value: 745, label: 'Mar', frontColor: theme.colors.text},
  {value: 745, label: 'Mar', frontColor: theme.colors.text},
  {value: 745, label: 'Mar', frontColor: theme.colors.text},
  {value: 745, label: 'Mar', frontColor: theme.colors.text},
  {value: 745, label: 'Mar', frontColor: theme.colors.text},
  {value: 600, label: 'Mai', frontColor: theme.colors.text},
  {value: 600, label: 'Mai', frontColor: theme.colors.text},
  {value: 600, label: 'Mai', frontColor: theme.colors.text},
  {value: 600, label: 'Nov', frontColor: theme.colors.primary},
];
export const Costs = () => {
  const [data, setData] = useState(barData);
  const onPressBar = (value: any, index: number) => {
    let newData = data.map((item, i) => {
      if (i === index) {
        return {...item, frontColor: theme.colors.primary};
      }
      return {...item, frontColor: theme.colors.text};
    });
    setData(newData);
  };
  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: RFPercentage(5),
          width: '100%',
          overflow: 'hidden',
        }}>
        <View style={{width: '80%', overflow: 'hidden'}}>
          <BarChart
            data={data}
            dashGap={0}
            showVerticalLines={false}
            noOfSections={3}
            yAxisThickness={0}
            xAxisThickness={0}
            yAxisLabelSuffix={'R$'}
            yAxisLabelWidth={RFPercentage(7)}
            barBorderRadius={RFPercentage(0.8)}
            barWidth={RFPercentage(3)}
            height={RFPercentage(15)}
            isAnimated
            animationDuration={400}
            onPress={onPressBar}
            disableScroll={false}
            scrollToEnd={true}
          />
        </View>
      </View>
    </View>
  );
};
