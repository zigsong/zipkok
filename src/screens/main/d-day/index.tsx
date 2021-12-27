import React from 'react';
import { Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';

import HeaderNavigator from 'screens/header/HeaderNavigator';
import { ThemedView } from 'components/Themed';
import BaseLayout from 'components/BaseLayout';
import BaseHeader from 'components/BaseHeader';
import { BoldText, LightText } from 'components/StyledText';
import PALETTE from 'styles/palette';
import blobImg from 'assets/images/blob.png';
import pencilIcon from 'assets/images/pencil.png';

const Dday = () => <HeaderNavigator component={DdayScreen} />;

const DdayScreen = () => {
  return (
    <ThemedView style={styles.container}>
      <BaseHeader title="디데이" subtitle="격리해제일까지" />
      <BaseLayout>
        <View>
          <TouchableOpacity style={styles.editWrapper}>
            <Text style={styles.freeText}>격리해제일: 2021/12/31</Text>
            <Image source={pencilIcon} />
          </TouchableOpacity>
          <View style={styles.content}>
            <Image source={blobImg} style={styles.blob} />
            <View style={styles.textWrapper}>
              <LightText>격리해제일까지</LightText>
              <BoldText style={styles.ddayText}>D-7</BoldText>
            </View>
          </View>
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
  editWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    top: 16,
    right: 24,
  },
  freeText: {
    color: PALETTE.green.tint_400,
    marginRight: 6,
  },
  content: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 56,
  },
  blob: {
    position: 'absolute',
  },
  textWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ddayText: {
    top: 8,
    fontSize: 40,
  },
});

export default Dday;
