import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { RFPercentage } from 'react-native-responsive-fontsize';

import { CostCard } from '../../components/CostCard';
import theme from '../../styles/theme';

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
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{width: '100%'}}
        ListHeaderComponent={
          <View
            style={{
              width: '100%',
              overflow: 'hidden',
              paddingBottom: RFPercentage(2),
            }}>
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
              animationDuration={600}
              onPress={onPressBar}
              disableScroll={false}
              scrollToEnd={true}
              yAxisTextStyle={{color: theme.colors.text}}
              xAxisLabelTextStyle={{color: theme.colors.text}}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: RFPercentage(2),
              }}>
              <Text
                style={{
                  fontSize: RFPercentage(2.5),
                  color: theme.colors.text,
                  textAlign: 'left',
                  fontWeight: 'bold',
                  marginTop: RFPercentage(4),
                }}>
                Gasto mensal
              </Text>
              <Text
                style={{
                  fontSize: RFPercentage(2.5),
                  color: theme.colors.text,
                  textAlign: 'right',
                  fontWeight: 'bold',
                  marginTop: RFPercentage(4),
                }}>
                420,00R$
              </Text>
            </View>
          </View>
        }
        ListFooterComponent={<View style={{height: RFPercentage(10)}}></View>}
        contentContainerStyle={{
          alignItems: 'center',
          paddingVertical: 30,
          paddingHorizontal: '10%',
        }}
        data={[1, 2, 3, 4, 5]}
        renderItem={({item}) => <CostCard />}
        keyExtractor={item => item.toString()}
      />
    </View>
  );
};
