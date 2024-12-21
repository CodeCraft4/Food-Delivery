import {COLORS, hp, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      fontSize: 36,
      fontWeight: '700',
      color: COLORS.primary,
    },
    btnContainer: {
      flexDirection: 'row',
    },
    button: {
      elevation: 2,
      backgroundColor: 'white',
      shadowColor: 'lightgray',
      borderRadius: 8,
      width: wp(10),
      height: hp(5),
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    },
    account: {
      flexDirection: 'row',
    },
    insideBtn: {
      width: wp(50),
    },
    member: {
      width: wp(30),
      color: COLORS.lightGray,
    },
  });
