import React from 'react';
import { StyleSheet, TouchableOpacity, View, FlatList, ListRenderItemInfo } from 'react-native';

import withHeaderNavigator from 'screens/header/HeaderNavigator';
import { ThemedView } from 'components/Themed';
import BaseLayout from 'components/BaseLayout';
import BaseHeader from 'components/BaseHeader';
import { TalkContent } from 'types';
import Card from './Card';
import Tag from './Tag';
import data from './mock';

const TalkScreen = () => {
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
      </BaseLayout>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
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
});

export default withHeaderNavigator(TalkScreen);
