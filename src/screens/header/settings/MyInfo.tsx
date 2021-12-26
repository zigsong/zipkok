import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { BoldText, LightText } from 'components/StyledText';
import { UserInfoProps } from 'types';
import PALETTE from 'styles/palette';

const MyInfo = ({ image, nickname, phoneNumber }: UserInfoProps) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <BoldText style={styles.nickname}>{nickname}</BoldText>
        <LightText style={styles.phoneNumber}>{phoneNumber}</LightText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 124,
    height: 124,
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: PALETTE.violet.tint_400,
    borderRadius: 75,
  },
  textContainer: {
    marginTop: 18,
    alignItems: 'center',
  },
  nickname: {
    fontSize: 18,
  },
  phoneNumber: {
    marginTop: 2,
    fontSize: 16,
  },
});

export default MyInfo;
