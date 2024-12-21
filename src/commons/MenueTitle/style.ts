import {COLORS, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = ({color}) =>
  StyleSheet.create({
    user: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: '700',
      color: color ? color : COLORS.black,
    },
    allBtn: {
      fontWeight: '700',
    },
    edits: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 0.6,
      padding: wp(2),
      borderColor: COLORS.black,
      borderRadius: 10,
      paddingLeft: wp(5),
    },
    description: {
      fontSize: 16,
      fontWeight: '300',
      width: wp(80),
    },
  });
