import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import TalkScreen from './TalkScreen';
import WriteScreen from './WriteScreen';

export type TalkStackParamList = {
  Talk: undefined;
  Write: {
    refetchTalks: () => void;
  };
};

export type TalkNavigationProps = StackNavigationProp<TalkStackParamList>;

const Stack = createStackNavigator();

const TalkNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Talk" component={TalkScreen} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Write" component={WriteScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default TalkNavigator;
