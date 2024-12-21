import {COLORS, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    title: {
      fontSize: 36,
      fontWeight: '700',
      color: COLORS.primary,
      width: wp(50),
    },
    send: {
      fontSize: 24,
      fontWeight: '700',
      color: COLORS.gray,
    },
    arrowBtn: {
      width: wp(20),
      justifyContent: 'flex-end',
      alignSelf: 'flex-end',
      textAlign: 'center',
    },
  });
