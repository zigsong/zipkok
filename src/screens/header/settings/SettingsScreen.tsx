import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { HeaderNavigationProps } from 'screens/header/HeaderNavigator';

const SettingsScreen = () => {
  const navigation = useNavigation<HeaderNavigationProps>();

  return (
    <View>
      <Text>FriendsList</Text>
    </View>
  );
};

export default SettingsScreen;
