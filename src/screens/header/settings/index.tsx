import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ThemedView } from 'components/Themed';
import mockUserImage from 'assets/images/mockUser.jpg';
import editProfileIcon from 'assets/images/edit_profile.png';
import addFriendsIcon from 'assets/images/add_friends.png';
import infoIcon from 'assets/images/info.png';
import MyInfo from './MyInfo';
import Button from './Button';
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
      <View style={styles.buttonsContainer}>
        <Button image={editProfileIcon} text="내 정보 수정" />
        <Button image={addFriendsIcon} text="새 친구 등록" />
        <Button image={infoIcon} text="문의하기" />
      </View>
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
