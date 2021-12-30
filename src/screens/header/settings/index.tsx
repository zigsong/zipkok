import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ThemedView } from 'components/Themed';
import mockUserImage from 'assets/images/mockUser.jpg';
import profileIcon from 'assets/images/profile.png';
import infoIcon from 'assets/images/info.png';
import { UserInfoProps } from 'types';
import MyInfo from './MyInfo';
import Button from './Button';

const mockUser: UserInfoProps = {
  image: mockUserImage,
  nickname: '뱁새',
  phoneNumber: '010-1234-5678',
};

const SettingsScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <MyInfo {...mockUser} />
      <View style={styles.buttonsContainer}>
        <Button image={profileIcon} text="내 정보 수정" />
        <Button image={infoIcon} text="문의하기" />
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    bottom: 60,
  },
  buttonsContainer: {
    marginTop: 60,
    alignItems: 'center',
  },
});

export default SettingsScreen;
