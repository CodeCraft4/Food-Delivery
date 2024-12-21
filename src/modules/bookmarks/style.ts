import {COLORS, hp, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    container: {
      padding: wp(4),
      flex: 1,
    },
    title: {
      fontWeight: '500',
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
    container2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    shown: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: wp(4),
    },
    add: {
      textAlign: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: COLORS.black,
      fontWeight: '500',
      fontSize: 18,
    },
  });
