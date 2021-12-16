import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CalendarScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>캘린더</Text>
      <Text style={styles.subtitle}>우리 같이 노는날</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'center',
  },
});

export default CalendarScreen;
