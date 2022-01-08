import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { TalkContent, TalkTag } from 'types';
import { toMonthDate } from 'utils';
import Tag from './Tag';
import PALETTE from 'styles/palette';

const TAG_CONVERTER: { [key in TalkTag]: string } = {
  CLOSE_CONTACT: '밀접접촉',
  CONFIRMED: '확진자',
  BORED: '심심할때',
  ILL: '아플때',
};

const tagStyle = {
  text: {
    fontSize: 12,
  },
  view: {
    padding: 4,
  },
};

const Card = ({ userName, date, tags, content }: TalkContent) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.tagsContainer}>
          {tags.map((tag) => (
            <View key={tag} style={styles.tagWrapper}>
              <Tag style={tagStyle} text={TAG_CONVERTER[tag]} selected />
            </View>
          ))}
        </View>
        <View style={styles.contentWrapper}>
          <Text numberOfLines={3} ellipsizeMode="tail" style={styles.content}>
            {content}
          </Text>
        </View>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.bottomContainer}>
        <Text style={styles.userDateText}>{userName.slice(0, 10)}</Text>
        <Text style={styles.userDateText}>{toMonthDate(date)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 380,
    height: 138,
    borderRadius: 8,
    backgroundColor: PALETTE.white.bg_400,
  },
  topContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  tagsContainer: {
    flexDirection: 'row',
  },
  tagWrapper: {
    minWidth: 56,
    marginRight: 4,
  },
  contentWrapper: {
    marginTop: 10,
  },
  content: {
    color: PALETTE.black.text_300,
  },
  divider: {
    backgroundColor: PALETTE.green.vintage_500,
    height: 1,
    width: '100%',
    position: 'absolute',
    bottom: 32,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  userDateText: {
    color: PALETTE.green.tint_400,
  },
});

export default Card;
