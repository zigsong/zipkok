import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BoldText } from 'components/StyledText';
import talkIcon from 'assets/images/tabbar-talk.png';
import talkActiveIcon from 'assets/images/tabbar-talk-active.png';
import ddayIcon from 'assets/images/tabbar-dday.png';
import ddayActiveIcon from 'assets/images/tabbar-dday-active.png';
import chartIcon from 'assets/images/tabbar-chart.png';
import chartActiveIcon from 'assets/images/tabbar-chart-active.png';
import guestbookIcon from 'assets/images/tabbar-guestbook.png';
import guestbookActiveIcon from 'assets/images/tabbar-guestbook-active.png';
import TalkScreen from './talk';
import DdayScreen from './d-day';
import ChartScreen from './chart';
import GuestbookScreen from './guestbook';
import PALETTE from 'styles/palette';

const routes = [
  {
    name: 'talk',
    title: '이야기',
    defautlIcon: talkIcon,
    activeIcon: talkActiveIcon,
    screen: TalkScreen,
  },
  {
    name: 'd-day',
    title: '디데이',
    defautlIcon: ddayIcon,
    activeIcon: ddayActiveIcon,
    screen: DdayScreen,
  },
  {
    name: 'chart',
    title: '확진자현황',
    defautlIcon: chartIcon,
    activeIcon: chartActiveIcon,
    screen: ChartScreen,
  },
  {
    name: 'guestbook',
    title: '방명록',
    defautlIcon: guestbookIcon,
    activeIcon: guestbookActiveIcon,
    screen: GuestbookScreen,
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
          color: focused ? PALETTE.green.tint_400 : PALETTE.grey.text_400,
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
