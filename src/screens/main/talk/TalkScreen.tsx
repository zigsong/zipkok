import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  ListRenderItemInfo,
  Image,
  Platform,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import withHeaderNavigator from 'screens/header/HeaderNavigator';
import { ThemedView } from 'components/Themed';
import BaseLayout from 'components/BaseLayout';
import BaseHeader from 'components/BaseHeader';
import useLoadTalks from 'hooks/queries/useLoadTalks';
import PALETTE from 'styles/palette';
import addIcon from 'assets/images/add.png';
import { TalkContent, TalkTag } from 'types';
import Card from './Card';
import Tag from './Tag';
import { TalkNavigationProps } from '.';

const TalkScreen = () => {
  const [tags, setTags] = useState<TalkTag[]>([]);
  const navigation = useNavigation<TalkNavigationProps>();
  const { data, refetch: refetchTalks } = useLoadTalks();

  const toggleTag = (currentTag: TalkTag) => {
    if (tags.includes(currentTag)) {
      setTags((tags) => tags.filter((tag) => tag !== currentTag));
    } else {
      setTags((tags) => tags.concat(currentTag));
    }
  };

  const renderItem = ({ item }: ListRenderItemInfo<TalkContent>) =>
    tags.every((tag) => item.tags?.includes(tag)) ? (
      <View style={styles.cardWrapper}>
        <Card {...item} />
      </View>
    ) : null;

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
            <Pressable style={styles.tagButton} onPress={() => toggleTag('CLOSE_CONTACT')}>
              <Tag text="밀접접촉" style={tagStyle} selected={tags.includes('CLOSE_CONTACT')} />
            </Pressable>
            <Pressable style={styles.tagButton} onPress={() => toggleTag('CONFIRMED')}>
              <Tag text="확진자" style={tagStyle} selected={tags.includes('CONFIRMED')} />
            </Pressable>
            <Pressable style={styles.tagButton} onPress={() => toggleTag('BORED')}>
              <Tag text="심심할때" style={tagStyle} selected={tags.includes('BORED')} />
            </Pressable>
            <Pressable style={styles.tagButton} onPress={() => toggleTag('ILL')}>
              <Tag text="아플때" style={tagStyle} selected={tags.includes('ILL')} />
            </Pressable>
          </View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={styles.listView}
          ></FlatList>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate('Write', { refetchTalks })}
          >
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
