import React from 'react';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { BoldText, LightText } from 'components/StyledText';
import { HeaderNavigationProps } from 'screens/header/HeaderNavigator';
import settingsIcon from 'assets/images/settings.png';

interface Props {
  title: string;
  subtitle: string;
}

const BaseHeader = ({ title, subtitle }: Props) => {
  const navigation = useNavigation<HeaderNavigationProps>();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <BoldText style={styles.title}>{title}</BoldText>
        <LightText>{subtitle}</LightText>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Settings')}>
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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    marginHorizontal: 5,
  },
});

export default BaseHeader;
