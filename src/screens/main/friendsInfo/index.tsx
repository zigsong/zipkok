import React from 'react';
import { StyleSheet, Text } from 'react-native';

import HeaderNavigator from 'screens/header/HeaderNavigator';
import { ThemedView } from 'components/Themed';
import BaseLayout from 'components/BaseLayout';
import BaseHeader from 'components/BaseHeader';
import PALETTE from 'styles/palette';

const FriendsInfo = () => <HeaderNavigator component={FriendsInfoScreen} />;

const FriendsInfoScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <BaseHeader title="친구정보" subtitle="준비중..." />
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

export default FriendsInfo;
