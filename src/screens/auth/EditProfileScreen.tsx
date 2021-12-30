import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import useAuth from 'contexts/auth/useAuth';
import { ThemedView } from 'components/Themed';
import PALETTE from 'styles/palette';
import cameraIcon from 'assets/images/camera.png';
import emptyProfileIcon from 'assets/images/empty_profile.png';
import Input from './Input';
import Button from './Button';

const EditProfileScreen = () => {
  const [nickname, setNickName] = useState('');

  const { login } = useAuth();

  return (
    <ThemedView style={styles.container}>
      <Text style={styles.headerTitle}>Edit Profile</Text>
      <View style={styles.imageWrapper}>
        <Image source={emptyProfileIcon} style={styles.profileImage} />
        <TouchableOpacity style={styles.cameraButton}>
          <Image source={cameraIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputsContainer}>
        <View>
          <Input
            label="이름"
            value={nickname}
            onChangeText={setNickName}
            placeholder="닉네임을 입력해주세요"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button text="Sign In" onPress={login} />
        </View>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  headerTitle: {
    fontFamily: 'balsamiq-sans-bold',
    fontSize: 28,
    color: PALETTE.green.tint_400,
    textAlign: 'center',
  },
  imageWrapper: {
    marginTop: 32,
    alignItems: 'center',
  },
  profileImage: {
    width: 144,
    height: 144,
    borderWidth: 4,
    borderColor: PALETTE.green.tint_400,
    borderRadius: 75,
  },
  cameraButton: {
    position: 'absolute',
    width: 144,
    bottom: 0,
    right: 16,
  },
  inputsContainer: {
    marginTop: 48,
  },
  buttonWrapper: {
    marginTop: 24,
  },
});

export default EditProfileScreen;
