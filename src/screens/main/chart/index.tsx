import React from 'react';
import { StyleSheet, View } from 'react-native';

import withHeaderNavigator from 'screens/header/HeaderNavigator';
import { ThemedView } from 'components/Themed';
import BaseLayout from 'components/BaseLayout';
import BaseHeader from 'components/BaseHeader';
import { BoldText, LightText } from 'components/StyledText';
import useConfirmedData from 'hooks/queries/useConfirmedData';
import PALETTE from 'styles/palette';
import { toMonthDate } from 'utils';
import ConfirmedChart from './ConfirmedChart';

const ChartScreen = () => {
  const { data } = useConfirmedData();

  const weeklyDates = Object.keys(data?.domestic || {});
  const recentDate = weeklyDates[weeklyDates.length - 1];
  const recentDomestic = data?.domestic[recentDate] || 0;
  const recentOverseas = data?.overseas[recentDate] || 0;
  const recentTotal = recentDomestic + recentOverseas;

  return (
    <ThemedView style={styles.container}>
      <BaseHeader title="확진자현황" subtitle="준비중..." />
      <BaseLayout>
        <View style={styles.titleWrapper}>
          <View style={[styles.rowContainer, styles.titleMain]}>
            <BoldText style={[styles.textLarge, styles.textBlack]}>
              {toMonthDate(new Date(recentDate))} 신규합계
            </BoldText>
            <BoldText style={[styles.textLarge, styles.textRed]}>
              {recentTotal.toLocaleString()}
            </BoldText>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.rowContainer}>
              <LightText style={styles.textBlack}>국내발생</LightText>
              <LightText style={styles.textRed}>{recentDomestic?.toLocaleString()}</LightText>
            </View>
            <View style={styles.rowContainer}>
              <LightText style={styles.textBlack}>해외유입</LightText>
              <LightText style={styles.textRed}>{recentOverseas?.toLocaleString()}</LightText>
            </View>
          </View>
        </View>
        <View style={styles.chartContainer}>{data && <ConfirmedChart data={data} />}</View>
      </BaseLayout>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
  },
  titleWrapper: {
    marginTop: 60,
    marginBottom: 44,
  },
  titleMain: {
    marginBottom: 4,
  },
  rowContainer: {
    flexDirection: 'row',
    marginRight: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLarge: {
    fontSize: 24,
  },
  textBlack: {
    color: PALETTE.black.text_300,
    marginRight: 4,
  },
  textRed: {
    color: PALETTE.red.text_400,
  },
  chartContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
});

export default withHeaderNavigator(ChartScreen);
