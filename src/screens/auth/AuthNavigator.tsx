import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import SignInScreen from './SignInScreen';
import EditProfileScreen from './EditProfileScreen';

export type AuthStackParamList = {
  SignIn: undefined;
  EditProfile: undefined;
};

export type AuthNavigationProps = StackNavigationProp<AuthStackParamList>;

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
