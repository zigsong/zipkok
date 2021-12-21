import React from 'react';
import { View, StyleSheet } from 'react-native';

import PALETTE from 'styles/palette';

interface Props {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: Props) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    backgroundColor: PALETTE.violet.vintage_500,
    top: 100,
  },
});

export default BaseLayout;
