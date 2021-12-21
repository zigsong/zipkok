import React from 'react';
import { StyleSheet } from 'react-native';

import { ThemedView } from 'components/Themed';
import BaseLayout from 'components/BaseLayout';
import { BoldText, LightText } from 'components/StyledText';

const CalendarScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <BaseLayout>
        <BoldText style={styles.title}>캘린더</BoldText>
        <LightText style={styles.subtitle}>우리 같이 노는날</LightText>
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
  },
  subtitle: {
    textAlign: 'center',
  },
});

export default CalendarScreen;
