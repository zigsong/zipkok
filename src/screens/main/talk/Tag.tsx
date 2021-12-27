import React from 'react';
import { StyleProp, StyleSheet, Text, ViewStyle, TextStyle, View } from 'react-native';

import PALETTE from 'styles/palette';

interface Props {
  text: string;
  style?: {
    text: StyleProp<TextStyle>;
    view: StyleProp<ViewStyle>;
  };
  selected?: boolean;
}

const Tag = ({ text, style, selected }: Props) => {
  return (
    <View style={[styles.container, selected && styles.tintedContainer, style?.view]}>
      <Text style={[styles.text, selected && styles.tintedText, style?.text]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: PALETTE.white.bg_400,
  },
  tintedContainer: {
    backgroundColor: PALETTE.green.tint_400,
  },
  text: {
    fontFamily: 'pretendard',
    color: PALETTE.green.tint_400,
    textAlign: 'center',
  },
  tintedText: {
    color: PALETTE.white.default_400,
  },
});

export default Tag;
