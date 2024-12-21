import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, hp, wp} from '@enums';
import {CommonButtons} from '../button';
import {ArrowLeft, MapImg} from '@assets';
import {Spacer} from '../spacer';

type Props = {
  open: boolean;
  onClose: any;
};
export const AddBookMarkModal = (props: Props) => {
  const {open, onClose} = props;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={onClose}>
      <View style={styles.modal}>
        <TouchableOpacity onPress={onClose} style={styles.back}>
          <ArrowLeft width={wp(4)} height={hp(4)} />
          <Text style={styles.place}>Add Places</Text>
        </TouchableOpacity>
        <MapImg />
        <Spacer />
        <CommonButtons
          title="close"
          onPress={onClose}
          bgcolor={COLORS.primary}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    elevation: 3,
    shadowColor: 'black',
    backgroundColor: COLORS.white,
    flex: 1,
    textAlign: 'center',
  },
  back: {
    padding: wp(3),
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(3),
  },
  place: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.black,
  },
});
