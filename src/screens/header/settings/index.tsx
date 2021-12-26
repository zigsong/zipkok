import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ThemedView } from 'components/Themed';
import mockUserImage from 'assets/images/mockUser.jpg';
import MyInfo from './MyInfo';
import { UserInfoProps } from 'types';

const mockUser: UserInfoProps = {
  image: mockUserImage,
  nickname: '뱁새',
  phoneNumber: '010-1234-5678',
};

const SettingsScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <MyInfo {...mockUser} />
      <View style={styles.buttonsContainer}></View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  buttonsContainer: {
    marginTop: 60,
    alignItems: 'center',
  },
});

export default SettingsScreen;
