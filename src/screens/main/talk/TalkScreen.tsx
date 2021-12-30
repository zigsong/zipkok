import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  ListRenderItemInfo,
  Image,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import withHeaderNavigator from 'screens/header/HeaderNavigator';
import { ThemedView } from 'components/Themed';
import BaseLayout from 'components/BaseLayout';
import BaseHeader from 'components/BaseHeader';
import { TalkContent } from 'types';
import PALETTE from 'styles/palette';
import addIcon from 'assets/images/add.png';
import Card from './Card';
import Tag from './Tag';
import data from './mock';
import { TalkNavigationProps } from '.';

const TalkScreen = () => {
  const navigation = useNavigation<TalkNavigationProps>();

  const renderItem = ({ item }: ListRenderItemInfo<TalkContent>) => (
    <View style={styles.cardWrapper}>
      <Card {...item} />
    </View>
  );

  const tagStyle = {
    text: {
      fontSize: 16,
    },
    view: {
      paddingHorizontal: 6,
      paddingVertical: 4,
    },
  };

  return (
    <ThemedView style={styles.container}>
      <BaseHeader title="이야기" subtitle="준비중..." />
      <BaseLayout>
        <View style={styles.innerContainer}>
          <View style={styles.tagsContainer}>
            <TouchableOpacity style={styles.tagButton}>
              <Tag text="밀접접촉" style={tagStyle} selected />
            </TouchableOpacity>
            <TouchableOpacity style={styles.tagButton}>
              <Tag text="확진자" style={tagStyle} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.tagButton}>
              <Tag text="심심할때" style={tagStyle} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.tagButton}>
              <Tag text="아플때" style={tagStyle} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={styles.listView}
          ></FlatList>
          <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Write')}>
            <Image source={addIcon} />
          </TouchableOpacity>
        </View>
      </BaseLayout>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
  },
  innerContainer: {
    height: '100%',
  },
  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  tagButton: {
    minWidth: 80,
    marginHorizontal: 4,
  },
  listView: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  cardWrapper: {
    marginBottom: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 96,
    right: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
    borderRadius: 75,
    backgroundColor: PALETTE.green.tint_400,
    ...Platform.select({
      ios: {
        shadowColor: PALETTE.black.shadow_100,
        shadowOffset: {
          width: 4,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
});

export default withHeaderNavigator(TalkScreen);
