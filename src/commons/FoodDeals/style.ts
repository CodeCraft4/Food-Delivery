import {COLORS, hp, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: wp(8),
      justifyContent: 'center',
      height: hp(10),
      cursor: 'pointer',
    },
    title: {
      color: COLORS.black,
      textAlign: 'center',
    },
  });
