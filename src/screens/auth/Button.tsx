import React from 'react';
import { StyleSheet, TouchableOpacity, Text, TouchableWithoutFeedbackProps } from 'react-native';

import PALETTE from 'styles/palette';

interface Props extends TouchableWithoutFeedbackProps {
  text: string;
}

const Button = ({ text, ...args }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={args.onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 52,
    backgroundColor: PALETTE.green.tint_400,
    borderRadius: 12,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'balsamiq-sans-bold',
    fontSize: 24,
    color: PALETTE.white.default_400,
  },
});

export default Button;
