import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ArrowLeft} from '@assets';
import {hp, wp} from '@enums';

type Props = {
  open: boolean;
  onClose: any;
  item: any;
};
export const PaymentModal = (props: Props) => {
  const {open, onClose, item} = props;
  const imageWidth = 200;
  const imageHeight = 200;

  return (
    <Modal visible={open} onRequestClose={onClose} animationType="slide">
      <View>
        <TouchableOpacity onPress={onClose}>
          <ArrowLeft width={wp(4)} height={hp(4)} />
        </TouchableOpacity>
        <View style={styles.logo}>
          {item?.payLogo ? (
            React.cloneElement(item?.payLogo, {
              width: imageWidth,
              height: imageHeight,
            })
          ) : (
            <Text>not found</Text>
          )}
          <Text>{item.payName}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  logo: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
