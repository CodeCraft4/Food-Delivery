import {COLORS, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    user: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: 28,
      fontWeight: '700',
      color: COLORS.secondary,
    },
    edits: {
      flexDirection: 'row',
    },
    description: {
      fontSize: 18,
      fontWeight: '300',
      width: wp(80),
    },
    rows: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: wp(15),
      alignItems: 'center',
      backgroundColor: COLORS.white,
      marginBottom: wp(2),
      padding:wp(3),
      borderRadius:20,
      cursor:'pointer',
    },
    name: {
      color: COLORS.black,
      fontSize: 18,
      fontWeight: '600',
    },
  });
