import React from 'react';
import { StyleSheet, View } from 'react-native';

import withHeaderNavigator from 'screens/header/HeaderNavigator';
import { ThemedView } from 'components/Themed';
import BaseLayout from 'components/BaseLayout';
import BaseHeader from 'components/BaseHeader';
import { LightText } from 'components/StyledText';

const GuestbookScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <BaseHeader title="방명록" subtitle="준비중..." />
      <BaseLayout>
        <View style={styles.innerContainer}>
          <LightText>준비중...</LightText>
        </View>
      </BaseLayout>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
  },
  innerContainer: {
    marginTop: 48,
    alignItems: 'center',
  },
});

export default withHeaderNavigator(GuestbookScreen);
