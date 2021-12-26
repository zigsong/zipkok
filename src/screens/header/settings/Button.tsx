import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity } from 'react-native';

import { BoldText } from 'components/StyledText';
import PALETTE from 'styles/palette';

interface Props {
  image: ImageSourcePropType;
  text: string;
}

const Button = ({ image, text }: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={image} />
      <BoldText style={styles.text}>{text}</BoldText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 298,
    height: 42,
    backgroundColor: PALETTE.white.bg_400,
    borderRadius: 10,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginBottom: 12,
  },
  text: {
    marginLeft: 8,
    fontSize: 16,
  },
});

export default Button;
