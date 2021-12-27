/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ImageSourcePropType } from 'react-native';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

type PhoneNumber = `${number}-${number}-${number}`;

export interface UserInfoProps {
  image: ImageSourcePropType;
  nickname: string;
  phoneNumber: PhoneNumber;
}

export type TalkTag = 'CLOSE_CONTACT' | 'INFECTED' | 'BORED' | 'ILL';

export interface TalkContent {
  id: string;
  userId: string;
  userName: string;
  date: Date;
  tags: TalkTag[];
  content: string;
}
