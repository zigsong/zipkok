import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BoldText } from 'components/StyledText';
import calendarIcon from 'assets/images/tabbar-calendar.png';
import calendarActiveIcon from 'assets/images/tabbar-calendar-active.png';
import gohereIcon from 'assets/images/tabbar-gohere.png';
import gohereActiveIcon from 'assets/images/tabbar-gohere-active.png';
import diaryIcon from 'assets/images/tabbar-diary.png';
import diaryActiveIcon from 'assets/images/tabbar-diary-active.png';
import albumIcon from 'assets/images/tabbar-album.png';
import albumActiveIcon from 'assets/images/tabbar-album-active.png';
import friendsInfoIcon from 'assets/images/tabbar-friends-info.png';
import friendsInfoActiveIcon from 'assets/images/tabbar-friends-info-active.png';
import Calendar from './calendar';
import GoHere from './gohere';
import Diary from './diary';
import Album from './album';
import FriendsInfo from './friendsInfo';
import PALETTE from 'styles/palette';

const routes = [
  {
    name: 'calendar',
    title: '캘린더',
    defautlIcon: calendarIcon,
    activeIcon: calendarActiveIcon,
    screen: Calendar,
  },
  {
    name: 'gohere',
    title: '여기가자',
    defautlIcon: gohereIcon,
    activeIcon: gohereActiveIcon,
    screen: GoHere,
  },
  {
    name: 'diary',
    title: '교환일기',
    defautlIcon: diaryIcon,
    activeIcon: diaryActiveIcon,
    screen: Diary,
  },
  {
    name: 'album',
    title: '앨범',
    defautlIcon: albumIcon,
    activeIcon: albumActiveIcon,
    screen: Album,
  },
  {
    name: 'friendsInfo',
    title: '친구정보',
    defautlIcon: friendsInfoIcon,
    activeIcon: friendsInfoActiveIcon,
    screen: FriendsInfo,
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
          color: focused ? PALETTE.violet.tint_400 : PALETTE.grey.text_400,
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
    borderRadius: 24,
    borderTopWidth: 0,
    height: 88,
    paddingHorizontal: 12,
  },
  tabBarIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
  },
  tabBarText: {
    marginTop: 4,
    fontSize: 12,
  },
});

export default MainNavigator;
