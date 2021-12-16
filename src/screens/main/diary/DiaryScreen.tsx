import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DiaryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>교환일기</Text>
      <Text style={styles.subtitle}>우리만의 비밀 일기장</Text>
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

export default DiaryScreen;
