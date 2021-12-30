import React, { useState } from 'react';
import { Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import withHeaderNavigator from 'screens/header/HeaderNavigator';
import { ThemedView } from 'components/Themed';
import BaseLayout from 'components/BaseLayout';
import BaseHeader from 'components/BaseHeader';
import { BoldText, LightText } from 'components/StyledText';
import PALETTE from 'styles/palette';
import blobImg from 'assets/images/blob.png';
import pencilIcon from 'assets/images/pencil.png';

const DdayScreen = () => {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [freeDate, setFreeDate] = useState<Date>();

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date: Date) => {
    setFreeDate(date);
    hideDatePicker();
  };

  const timeDivider = 1000 * 3600 * 24;

  const dday = freeDate
    ? Math.ceil((freeDate?.getTime() - new Date(Date.now()).getTime()) / timeDivider)
    : '?';

  return (
    <ThemedView style={styles.container}>
      <BaseHeader title="디데이" subtitle="격리해제일까지" />
      <BaseLayout>
        <View>
          <TouchableOpacity style={styles.editWrapper} onPress={showDatePicker}>
            <Text style={styles.freeText}>
              격리해제일: {freeDate ? freeDate.toLocaleDateString() : '날짜를 선택해주세요'}
            </Text>
            <Image source={pencilIcon} />
          </TouchableOpacity>
          <View style={styles.content}>
            <Image source={blobImg} style={styles.blob} />
            <View style={styles.textWrapper}>
              <LightText>격리해제일까지</LightText>
              <BoldText style={styles.ddayText}>D-{dday}</BoldText>
            </View>
          </View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
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
    marginTop: 144,
    alignItems: 'center',
  },
  blob: {
    position: 'absolute',
  },
  textWrapper: {
    top: 108,
    alignItems: 'center',
  },
  ddayText: {
    top: 8,
    fontSize: 40,
  },
});

export default withHeaderNavigator(DdayScreen);
