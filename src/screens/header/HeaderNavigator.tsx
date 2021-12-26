import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import SettingsScreen from './settings/SettingsScreen';
import FriendsListScreen from './friendsList/FriendsListScreen';

export type RootStackParamList = {
  Settings: undefined;
  FriendsList: undefined;
};

export type HeaderNavigationProps = StackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator();

interface Props {
  component: React.ComponentType;
}

const HeaderNavigator = ({ component }: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={component} options={{ headerShown: false }} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="FriendsList" component={FriendsListScreen} />
    </Stack.Navigator>
  );
};

export default HeaderNavigator;
