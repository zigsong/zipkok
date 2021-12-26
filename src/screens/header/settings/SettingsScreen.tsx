import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { ThemedView } from 'components/Themed';

const SettingsScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <Text>세팅</Text>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SettingsScreen;
