import React from 'react';
import { Image, Pressable, View, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BoldText, LightText } from 'components/StyledText';
import settingsIcon from 'assets/images/settings.png';
import multiSelectIcon from 'assets/images/multi-select.png';
import PALETTE from 'styles/palette';

interface Props {
  title: string;
  subtitle: string;
}

const BaseHeader = ({ title, subtitle }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <BoldText style={styles.title}>{title}</BoldText>
        <LightText style={styles.subtitle}>{subtitle}</LightText>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Image source={multiSelectIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={settingsIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    marginHorizontal: 5,
  },
  title: {
    fontSize: 32,
  },
  subtitle: {
    color: PALETTE.violet.tint_400,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    marginHorizontal: 5,
  },
});

export default BaseHeader;
