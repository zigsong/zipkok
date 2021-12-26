import React from 'react';
import { StyleSheet, Text } from 'react-native';

import HeaderNavigator from 'screens/header/HeaderNavigator';
import { ThemedView } from 'components/Themed';
import BaseLayout from 'components/BaseLayout';
import BaseHeader from 'components/BaseHeader';
import PALETTE from 'styles/palette';

const Diary = () => <HeaderNavigator component={DiaryScreen} />;

const DiaryScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <BaseHeader title="교환일기" subtitle="우리만의 비밀 일기장" />
      <BaseLayout>
        <Text>내용</Text>
      </BaseLayout>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
  },
  subtitle: {
    textAlign: 'center',
    color: PALETTE.violet.tint_400,
  },
});

export default Diary;
