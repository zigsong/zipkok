import React from 'react';
import { Image } from 'react-native';
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';

import SettingsScreen from './settings';
import gobackIcon from 'assets/images/goback.png';
import PALETTE from 'styles/palette';

export type RootStackParamList = {
  Settings: undefined;
  FriendsList: undefined;
};

export type HeaderNavigationProps = StackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator();

interface Props {
  component: React.ComponentType;
}

const headerOptions = {
  headerStyle: { backgroundColor: PALETTE.green.bg_400 },
  headerTintColor: PALETTE.green.tint_400,
  headerTitleStyle: { fontWeight: 'bold', fontFamily: 'cafe-surround' },
  headerBackTitleVisible: false,
  headerBackImage: () => <Image source={gobackIcon} style={{ marginLeft: 12 }} />,
} as StackNavigationOptions;

const HeaderNavigator = ({ component }: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={component} options={{ headerShown: false }} />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: '설정', ...headerOptions }}
      />
    </Stack.Navigator>
  );
};

export default HeaderNavigator;
