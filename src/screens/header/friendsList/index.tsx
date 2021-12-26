import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { ThemedView } from 'components/Themed';

const FriendsListScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <Text>친구목록</Text>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default FriendsListScreen;
