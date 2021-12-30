import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ThemedView } from 'components/Themed';
import PALETTE from 'styles/palette';
import Input from './Input';
import Button from './Button';
import { AuthNavigationProps } from './AuthNavigator';

const SignInScreen = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<AuthNavigationProps>();

  return (
    <ThemedView style={styles.container}>
      <Text style={styles.headerTitle}>Sign In</Text>
      <View style={styles.inputsContainer}>
        <View style={styles.inputWrapper}>
          <Input
            label="이름"
            value={name}
            onChangeText={setName}
            placeholder="이름을 입력해주세요"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Input
            label="전화번호"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="010-1234-5678"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Input
            label="비밀번호"
            value={password}
            onChangeText={setPassword}
            placeholder="000000"
            secureTextEntry
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button text="Sign In" onPress={() => navigation.navigate('EditProfile')} />
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
    marginLeft: 12,
    fontFamily: 'balsamiq-sans-bold',
    fontSize: 28,
    color: PALETTE.green.tint_400,
  },
  inputsContainer: {
    marginTop: 48,
  },
  inputWrapper: {
    marginVertical: 12,
  },
  buttonWrapper: {
    marginTop: 60,
  },
});

export default SignInScreen;
