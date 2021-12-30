import React from 'react';
import { Image, StyleSheet, TextInput, TextInputProps, View, TouchableOpacity } from 'react-native';

import { BoldText } from 'components/StyledText';
import deleteIcon from 'assets/images/deleteInput.png';
import PALETTE from 'styles/palette';

interface Props extends TextInputProps {
  label: string;
}

const Input = ({ label, ...args }: Props) => {
  return (
    <View style={styles.container}>
      <BoldText style={styles.labelText}>{label}</BoldText>
      <TextInput
        {...args}
        placeholderTextColor={PALETTE.green.placeholder_400}
        style={styles.input}
      />
      <TouchableOpacity>
        <Image source={deleteIcon} style={styles.deleteButton} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: PALETTE.green.tint_400,
    borderRadius: 12,
  },
  labelText: {
    backgroundColor: PALETTE.green.bg_400,
    paddingHorizontal: 6,
    paddingVertical: 2,
    position: 'absolute',
    top: -10,
    left: 16,
    zIndex: 1,
  },
  input: {
    height: 52,
    padding: 12,
    fontSize: 16,
  },
  deleteButton: {
    position: 'absolute',
    right: 10,
    bottom: 18,
  },
});

export default Input;
