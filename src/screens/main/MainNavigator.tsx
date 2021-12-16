import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BoldText } from 'components/StyledText';
import calendarIcon from 'assets/images/tabbar-calendar.png';
import calendarActiveIcon from 'assets/images/tabbar-calendar-active.png';
import diaryIcon from 'assets/images/tabbar-diary.png';
import diaryActiveIcon from 'assets/images/tabbar-diary-active.png';
import CalendarScreen from './calendar/CalendarScreen';
import DiaryScreen from './diary/DiaryScreen';
import PALETTE from 'styles/palette';

const routes = [
  {
    name: 'calendar',
    title: '캘린더',
    defautlIcon: calendarIcon,
    activeIcon: calendarActiveIcon,
    screen: CalendarScreen,
  },
  {
    name: 'diary',
    title: '교환일기',
    defautlIcon: diaryIcon,
    activeIcon: diaryActiveIcon,
    screen: DiaryScreen,
  },
];

const Tab = createBottomTabNavigator();

interface TabBarIconProps {
  route: typeof routes[0];
  focused: boolean;
}

const TabBarIcon = ({ route, focused }: TabBarIconProps) => {
  return (
    <View style={styles.tabBarIcon}>
      <Image source={focused ? route.activeIcon : route.defautlIcon} />
      <BoldText
        style={{
          color: focused ? PALETTE.violet[400] : PALETTE.grey[400],
          ...styles.tabBarText,
        }}
      >
        {route.title}
      </BoldText>
    </View>
  );
};

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      {routes.map((route) => (
        <Tab.Screen
          key={route.name}
          name={route.title}
          component={route.screen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => <TabBarIcon route={route} focused={focused} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    backgroundColor: PALETTE.white.bg_400,
    borderRadius: 25,
    borderTopWidth: 0,
    height: 96,
  },
  tabBarIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
  },
  tabBarText: {
    marginTop: 6,
  },
});

export default MainNavigator;
