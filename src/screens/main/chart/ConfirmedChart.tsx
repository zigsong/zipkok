import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { AbstractChartConfig } from 'react-native-chart-kit/dist/AbstractChart';
import { ChartData } from 'react-native-chart-kit/dist/HelperTypes';

import { toMonthDate } from 'utils';
import { ConfirmedData } from 'types';
import PALETTE from 'styles/palette';

interface Props {
  data: ConfirmedData;
}

const ConfirmedChart = ({ data }: Props) => {
  const dates = Object.keys(data.domestic).map((dateString) => toMonthDate(new Date(dateString)));
  const domesticCnt = Object.values(data.domestic);
  const overseasCnt = Object.values(data.overseas);
  const confirmedCnt = domesticCnt.map((num, idx) => num + overseasCnt[idx]);

  const chartData: ChartData = {
    labels: dates.slice(1),
    datasets: [
      {
        data: confirmedCnt.slice(1),
        colors: [
          ...Array.from(
            { length: 6 },
            () =>
              // REFACTOR: opacity not working
              (opacity = 0.79) =>
                `rgba(255, 255, 255, ${opacity})`,
          ),
          () => PALETTE.green.tint_400,
        ],
      },
    ],
  };

  const chartConfig: AbstractChartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    horizontalOffset: 10,
    color: () => PALETTE.black.text_500,
    barRadius: 4,
    propsForVerticalLabels: {
      dy: -10,
    },
  };

  const screenWidth = Dimensions.get('window').width;

  return (
    <BarChart
      data={chartData}
      width={screenWidth - 96}
      height={342}
      fromZero
      yAxisLabel=""
      yAxisSuffix=""
      // REFACTOR: add margin between bar and topValue
      showValuesOnTopOfBars
      withCustomBarColorFromData
      flatColor
      showBarTops={false}
      chartConfig={{ ...chartConfig }}
      style={{ paddingRight: -16 }}
    />
  );
};

export default ConfirmedChart;
