import React from 'react';
import { View, StyleSheet } from 'react-native';

import PALETTE from 'styles/palette';

interface Props {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: Props) => {
  return (
    <View style={styles.container}>
      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: PALETTE.violet.vintage_500,
  },
});

export default BaseLayout;
