import {COLORS, hp, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    container: {
      padding: wp(4),
    },
    title: {
      fontWeight: '400',
      fontSize: 20,
      color: COLORS.black,
    },
    personal: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    editBtn: {
      color: COLORS.primary,
      fontSize: 15,
      fontWeight: '400',
      cursor: 'pointer',
    },
    notify: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(2),
      borderRadius:10,
    },
    desc: {
      width: wp(70),
      padding:hp(2),
    },
    activeNotify: {
      backgroundColor: COLORS.white,
    },
  });
