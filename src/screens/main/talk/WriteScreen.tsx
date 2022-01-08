import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';
import { v4 as uuidv4 } from 'uuid';

import { BoldText } from 'components/StyledText';
import { ThemedView } from 'components/Themed';
import PALETTE from 'styles/palette';
import usePostTalk from 'hooks/queries/usePostTalk';
import { TalkTag } from 'types';
import Tag from './Tag';
import { TalkNavigationProps } from '.';

const WriteScreen = () => {
  const [content, setContent] = useState('');
  const [tags, setTags] = useState<TalkTag[]>(['CONFIRMED', 'ILL']);

  const talkMutation = usePostTalk();
  const navigation = useNavigation<TalkNavigationProps>();

  const userId = `uid-${uuidv4()}`;
  const userName = `uname-${uuidv4()}`;
  const date = new Date();

  const tagStyle = {
    text: {
      fontSize: 16,
    },
    view: {
      paddingHorizontal: 6,
      paddingVertical: 4,
    },
  };

  const submitTalk = () => {
    talkMutation.mutate({ userId, userName, content, tags, date });
  };

  const cancelPost = () => {
    const popAction = StackActions.pop();
    navigation.dispatch(popAction);
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.topContainer}>
        <BoldText style={styles.modalTitle}>글 작성</BoldText>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: PALETTE.white.default_400 }}
            onPress={cancelPost}
          >
            <Text style={{ ...styles.buttonText, color: PALETTE.green.tint_400 }}>취소</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: PALETTE.green.tint_400 }}
            onPress={submitTalk}
          >
            <Text style={{ ...styles.buttonText, color: PALETTE.white.default_400 }}>완료</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.innerContainer}>
        <Text style={styles.tagGuide}>태그 (중복선택 가능)</Text>
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
        <TextInput
          style={[styles.input, styles.contentInput]}
          onChangeText={setContent}
          value={content}
          multiline
          placeholder="내용을 입력해주세요"
          placeholderTextColor={PALETTE.black.text_900}
        />
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  modalTitle: {
    fontSize: 20,
    marginLeft: 4,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 10,
    margin: 16,
    marginBottom: 104,
    padding: 12,
    backgroundColor: PALETTE.white.bg_400,
  },
  button: {
    width: 60,
    height: 28,
    borderRadius: 75,
    marginHorizontal: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'pretendard',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  tagGuide: {
    marginLeft: 12,
    fontFamily: 'pretendard',
    fontSize: 16,
    color: PALETTE.green.tint_400,
  },
  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  tagButton: {
    minWidth: 80,
    marginHorizontal: 4,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    paddingVertical: 8,
  },
  contentInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: PALETTE.green.tint_400,
    borderTopWidth: 1,
    borderTopColor: PALETTE.green.tint_400,
  },
});

export default WriteScreen;
