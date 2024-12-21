import {COLORS, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    container: {
      padding: wp(4),
    },
    title: {
      fontWeight: '800',
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
    user: {
      padding: wp(2),
      backgroundColor: COLORS.white,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      cursor: 'pointer',
      width: wp(21),
    },
    tags: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      gap: 3,
    },
    tagsTitle: {
      color: COLORS.black,
      fontSize: 12,
    },
    rows: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: wp(15),
      alignItems: 'center',
      backgroundColor: COLORS.white,
      marginBottom: wp(2),
      padding: wp(3),
      borderRadius: 20,
      cursor: 'pointer',
    },
    name: {
      color: COLORS.black,
      fontSize: 18,
      fontWeight: '600',
    },
    text: {
      color: COLORS.black,
      fontWeight: '500',
    },
  });
