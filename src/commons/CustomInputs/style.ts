import {COLORS, hp, wp} from '@enums';
import {StyleSheet} from 'react-native';

export const styles = ({bgcolor}: any) =>
  StyleSheet.create({
    inputContainer: {
      backgroundColor: bgcolor ? '#E5E4E2' : COLORS.white,
      height: hp(8),
      width: wp(85),
      flex: 1,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp(2),
    },
    error: {
      color: 'red',
      paddingBottom: hp(0.8),
    },
  });
