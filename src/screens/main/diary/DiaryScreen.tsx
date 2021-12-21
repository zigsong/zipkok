import React from 'react';
import { StyleSheet } from 'react-native';

import { ThemedView } from 'components/Themed';
import BaseLayout from 'components/BaseLayout';
import { BoldText, LightText } from 'components/StyledText';

const DiaryScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <BaseLayout>
        <BoldText style={styles.title}>교환일기</BoldText>
        <LightText style={styles.subtitle}>우리만의 비밀 일기장</LightText>
      </BaseLayout>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'center',
  },
});

export default DiaryScreen;
